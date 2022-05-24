import { createSlice } from '@reduxjs/toolkit';
import { apiRequest } from './api';
import {
    GET_RESULT_HISTORY,
    GET_COMMISSION_HISTORY,
    TRANSACTION_HISTORY,
} from '../constants/urls';

export const slice = createSlice({
    name: 'result',
    initialState: {
        resultStore: [],
        commisionStore: [],
        transactionStore: [],
    },
    reducers: {
        resultInfo: (result, action) => {
            result.resultStore = action.payload;
        },
        commisionInfo: (result, action) => {
            result.commisionStore = action.payload;
        },
        transactionInfo: (result, action) => {
            result.transactionStore = action.payload;
        },
    },
});

export const { resultInfo, commisionInfo, transactionInfo } = slice.actions;
export default slice.reducer;

// Action Creators
export const getResults = (deviceId, year, month) => (dispatch, getState) => {
    const url = GET_RESULT_HISTORY;

    const dataToSend = {
        device_id: deviceId,
        year,
        month,
    };

    const formDetails = [];

    for (let key in dataToSend) {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(dataToSend[key]);
        formDetails.push(`${encodedKey}=${encodedValue}`);
    }

    const body = formDetails.join('&');
    console.log('from users', body);

    dispatch(
        apiRequest({
            url,
            method: 'POST',
            data: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            onSuccess: resultInfo.type,
        }),
    );
};

export const getCommissionResult =
    (deviceId, userId) => (dispatch, getState) => {
        const url = GET_COMMISSION_HISTORY;

        const dataToSend = {
            device_id: deviceId,
            uid: userId,
        };

        const formDetails = [];

        for (let key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formDetails.push(`${encodedKey}=${encodedValue}`);
        }

        const body = formDetails.join('&');
        console.log('from commision results ', body);

        dispatch(
            apiRequest({
                url,
                method: 'POST',
                data: body,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                onSuccess: commisionInfo.type,
            }),
        );
    };

export const getTransactionHistory =
    (deviceId, userID) => (dispatch, getState) => {
        const url = TRANSACTION_HISTORY;

        const dataToSend = {
            device_id: deviceId,
            uid: userID,
        };

        const formDetails = [];

        for (let key in dataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(dataToSend[key]);
            formDetails.push(`${encodedKey}=${encodedValue}`);
        }

        const body = formDetails.join('&');
        console.log('from transaction results ', body);

        dispatch(
            apiRequest({
                url,
                method: 'POST',
                data: body,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                onSuccess: transactionInfo.type,
            }),
        );
    };

// Selector
export const getResultInfo = state => state.entities.results.resultStore;
export const getCommisioInfo = state => state.entities.results.commissionStore;
export const getTransactionHistoryInfo = state =>
    state.entities.results.transactionStore;
