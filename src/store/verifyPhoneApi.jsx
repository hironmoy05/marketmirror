import { createSlice } from '@reduxjs/toolkit';
import { GET_VERIFY_PHONE, VERIFY_PHONE_OTP } from '../constants/urls';
import { apiRequest } from './api';

const slice = createSlice({
    name: 'verifyPhoneOtp',
    initialState: {
        sentPhoneStatus: [],
        sentOtpStatus: '',
    },
    reducers: {
        getPhoneOtpStatus: (verifyPhoneOtp, action) => {
            verifyPhoneOtp.sentPhoneStatus = action.payload;
        },
        getOtpStatus: (verifyPhoneOtp, action) => {
            verifyPhoneOtp.sentOtpStatus = action.payload;
        },
    },
});

export const { getPhoneOtpStatus, getOtpStatus } = slice.actions;
export default slice.reducer;

// Action Creators

export const sendOtpToVerifyPhone = phone => dispatch => {
    const url = GET_VERIFY_PHONE;
    const body = 'mobile=' + phone;

    dispatch(
        apiRequest({
            url,
            method: 'POST',
            data: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            onSuccess: getPhoneOtpStatus.type,
        }),
    );
};

export const checkOtpToVerifyPhone = (phone, otp) => dispatch => {
    const url = VERIFY_PHONE_OTP;

    console.log('from verify API', phone, otp);
    let dataToSend = { mobile: phone, code: otp };
    let formDetails = [];

    for (let key in dataToSend) {
        let encodeKey = encodeURIComponent(key);
        let encodeValue = encodeURIComponent(dataToSend[key]);
        formDetails.push(encodeKey + '=' + encodeValue);
    }

    formDetails = formDetails.join('&');
    console.log(formDetails);

    dispatch(
        apiRequest({
            url,
            method: 'POST',
            data: formDetails,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            onSuccess: getOtpStatus.type,
        }),
    );
};

// Selector

export const sentPhoneStatus = state =>
    state.entities.verifyPhone.sentPhoneStatus;

export const sentPhoneOtpStatus = state =>
    state.entities.verifyPhone.sentOtpStatus;
console.log(sentPhoneOtpStatus);
