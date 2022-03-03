import * as actions from '../api';
import {BASE_URL} from '../../constants/urls';
import {
  FORGOT_PASSWORD,
  VERIFY_OTP,
  RESET_PASSWORD,
  GET_VERIFY_EMAIL,
  VERIFY_EMAIL_OTP,
} from '../../constants/urls';
import Toast from 'react-native-root-toast';

const api =
  ({dispatch}) =>
  next =>
  async action => {
    if (action.type !== actions.apiRequest.type) return next(action);

    next(action);

    const {url, method, data, headers, onSuccess, onError} = action.payload;

    const mainUrl = BASE_URL + url;

    try {
      const resp = await fetch(mainUrl, {
        method,
        body: data,
        headers,
      });

      const res = await resp.json();
      const response = res;

      // console.log('from try', (response.data));
      // General
      dispatch(actions.apiRequestSuccess(response));
      // Specific
      if (onSuccess) dispatch({type: onSuccess, payload: response});

      // Add a Toast on screen.
      if (
        url === FORGOT_PASSWORD ||
        url === VERIFY_OTP ||
        url === RESET_PASSWORD ||
        url === GET_VERIFY_EMAIL ||
        url === VERIFY_EMAIL_OTP
      )
        Toast.show(response.Message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
    } catch (error) {
      // General
      dispatch(actions.apiRequestFailed(error.message));
      // Specific
      if (onError) dispatch({type: onError, payload: error.message});
    }
  };

export default api;
