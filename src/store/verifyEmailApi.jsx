import {createSlice} from '@reduxjs/toolkit';
import {GET_VERIFY_EMAIL, VERIFY_EMAIL_OTP} from '../constants/urls';
import {apiRequest} from './api';

const slice = createSlice({
  name: 'verifyOtp',
  initialState: {
    sentEmailStatus: '',
    sentOtpStatus: '',
  },
  reducers: {
    // actions => action handler
    getEmailOtpStatus: (verifyOtp, action) => {
      verifyOtp.sentEmailStatus = action.payload;
    },
    getOtpStatus: (verifyOtp, action) => {
      verifyOtp.sentOtpStatus = action.payload;
    },
  },
});

export const {getEmailOtpStatus, getOtpStatus} = slice.actions;
export default slice.reducer;

// Action Creators

export const sendOtpToVerifyEmail = email => dispatch => {
  const url = GET_VERIFY_EMAIL;
  const body = 'email=' + email;
  console.log('fform API', email);

  dispatch(
    apiRequest({
      url,
      method: 'Post',
      data: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      onSuccess: getEmailOtpStatus.type,
    }),
  );
};

export const checkOtpToVerifyEmail = (email, otp) => dispatch => {
  const url = VERIFY_EMAIL_OTP;

  console.log('from verify API', email, otp);
  let dataToSend = {email: email, code: otp};
  let formDetails = [];

  for (let key in dataToSend) {
    let encodeKey = encodeURIComponent(key);
    let encodeValue = encodeURIComponent(dataToSend[key]);
    formDetails.push(encodeKey + '=' + encodeValue);
  }

  formDetails = formDetails.join('&');
  // console.log(formDetails);

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

export const sentEmailStatus = state =>
  state.entities.verifyEmail.sentEmailStatus;

export const sentEmailOtpStatus = state =>
  state.entities.verifyEmail.sentOtpStatus;
console.log(sentEmailOtpStatus);
