import { createSlice } from '@reduxjs/toolkit';

import { apiRequest } from './api';
import { GET_WITHDRAWAL, GET_WITHDRAWAL_HISTORY } from '../constants/urls';

export const slice = createSlice({
    name: 'withdrawal',
    initialState: {
        withdrawalRequest: '',
        historyStore: [],
    },
    reducers: {
        withdrawalInfo: (withdrawal, action) => {
            console.log(action.payload, 'from reducerrrrrrrrrr')
            withdrawal.withdrawalRequest = action.payload;
        },
        withdrawalHistory: (withdrawal, action) => {
            withdrawal.historyStore = action.payload;
        },
    },
});

export const { withdrawalInfo, withdrawalHistory } = slice.actions;
export default slice.reducer;

// Action creators
export const getWithdrawl =
    (deviceId, userID, mode, amount) => (dispatch, getSate) => {
        const url = GET_WITHDRAWAL;

        const DataToSend = {
            device_id: deviceId,
            uid: userID,
            mode,
            amount,
        };

        const formDetails = [];

        for (let key in DataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(DataToSend[key]);
            formDetails.push(`${encodedKey}=${encodedValue}`);
        }

        const body = formDetails.join('&');
        console.log('ffffffffffffffffffff', body)

        dispatch(
            apiRequest({
                url,
                method: 'POST',
                data: body,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                onSucces: withdrawalInfo.type,
            }),
        );
    };

export const getWithdrawlHistory =
    (deviceId, userID) => (dispatch, getState) => {
        const url = GET_WITHDRAWAL_HISTORY;

        const DataToSend = {
            device_id: deviceId,
            uid: userID,
        };

        const formDetails = [];

        for (let key in DataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(DataToSend[key]);
            formDetails.push(`${encodedKey}=${encodedValue}`);
        }

        const body = formDetails.join('&');
        console.log('WithdrawlHistory from store', body);

        dispatch(
            apiRequest({
                url,
                method: 'POST',
                data: body,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                onSucces: withdrawalHistory.type,
            }),
        );
    };

// Selectord
export const withdrawalStatus = state =>
    state.entities.withdrawals.withdrawalRequest;
export const withdrawalHistoryStore = state =>
    state.entities.withdrawals.historyStore;
