import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {apiRequest} from './api';

import {DASHBOARD_CATEGORY} from '../constants/urls';

export const slice = createSlice({
  name: 'dashboard',
  initialState: {
    usersId: '',
    dashboradDetails: [],
  },
  reducers: {
    dashDetailsReceived: (dashboard, action) => {
      dashboard.dashboradDetails = action.payload;
    },
    getUsersId: (dashboard, action) => {
      dashboard.usersId = action.payload;
    },
  },
});

export const {dashDetailsReceived, getUsersId} = slice.actions;
export default slice.reducer;

// Action creators
export const loadDash = (state, userId) => (dispatch, getState) => {
  const url = DASHBOARD_CATEGORY;

  let dataToSend = {state, user_id: userId};
  let formDetails = [];

  for (let key in dataToSend) {
    const encodeKey = encodeURIComponent(key);
    const encodeValue = encodeURIComponent(dataToSend[key]);
    formDetails.push(`${encodeKey}=${encodeValue}`);
  }

  formDetails = formDetails.join('&');
  console.log('from dashboard', formDetails);

  dispatch(
    apiRequest({
      url,
      method: 'POST',
      body: formDetails,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      onSuccess: dashDetailsReceived.type,
    }),
  );
};

// Selector
export const getDashDetails = state =>
  state.entities.dashboard.dashboradDetails;

export const usersId = state => state.entities.dashboard.usersId;
