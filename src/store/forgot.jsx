import {createSlice} from '@reduxjs/toolkit';
import {FORGOT_PASSWORD, VERIFY_OTP, RESET_PASSWORD} from '../constants/urls';
import {apiRequest} from '../store/api';
// import Toast from 'react-native-root-toast';

export const slice = createSlice({
  name: 'forgot',
  initialState: {
    forgotMessage: {},
    otpMessage: '',
    resetMessage: '',
  },
  reducers: {
    // action => action Hanlder
    forgotMsg: (forgot, action) => {
      forgot.forgotMessage = action.payload;
    },
    forgotMsgRemoved: (forgot, action) => {
      forgot.forgotMessage = '';
    },
    otpVerify: (forgot, action) => {
      forgot.otpMessage = action.payload;
    },
    resetPass: (forgot, action) => {
      forgot.resetMessage = action.payload;
    },
  },
});

export const {forgotMsg, forgotMsgRemoved, otpVerify, resetPass} =
  slice.actions;
export default slice.reducer;

// Selector
// export const msgReceived = createSelector(
//     state => state.entities.forgot,
//     forgot => forgot.forgotMessage.Status
// )
export const msgReceived = state => state.entities.forgot.forgotMessage.Status;

export const isOtpVerified = state => state.entities.forgot.otpMessage.Status;

export const resetPasswordMsg = state =>
  state.entities.forgot.resetMessage.Status;

// Action Creators
export const verifyEmail = email => dispatch => {
  const url = FORGOT_PASSWORD;
  const body = 'email=' + email;

  dispatch(
    apiRequest({
      url,
      method: 'POST',
      data: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },

      onSuccess: forgotMsg.type,
      onError: forgotMsg.type,
    }),
  );

  // Add a Toast on screen.
  // Toast.show(msgReceived.message, {
  //     duration: Toast.durations.LONG,
  //     position: Toast.positions.TOP,
  //     shadow: true,
  //     animation: true,
  //     hideOnPress: true,
  //     delay: 0,
  //     onShow: () => {
  //         // calls on toast\`s appear animation start
  //     },
  //     onShown: () => {
  //         // calls on toast\`s appear animation end.
  //     },
  //     onHide: () => {
  //         // calls on toast\`s hide animation start.
  //     },
  //     onHidden: () => {
  //         // calls on toast\`s hide animation end.
  //     }
  // });
};

export const verifyOtp = (email, otp) => dispatch => {
  const url = VERIFY_OTP;

  let dataToSend = {email, code: otp};
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
      onSuccess: otpVerify.type,
    }),
  );
};

export const resetThePassword =
  (userEmail, password, retypepassword) => dispatch => {
    const url = RESET_PASSWORD;

    const dataToSend = {
      email: userEmail,
      newpassword: password,
      cpassword: retypepassword,
    };
    let formDetails = [];

    for (let key in dataToSend) {
      let encodeKey = key;
      let encodeValue = dataToSend[key];
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
        onSuccess: resetPass.type,
      }),
    );
  };
