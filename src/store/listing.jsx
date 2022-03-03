import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {apiRequest} from './api';
import {GET_LISTING, GET_LISTINGDETAIL} from '../constants/urls';

export const slice = createSlice({
  name: 'listing',
  initialState: {
    listingDetails: [],
  },
  reducers: {
    listingReceived: (listing, action) => {
      listing.listingDetails = action.payload;
    },
  },
});

export const {listingReceived} = slice.actions;
export default slice.reducer;

// Action creators
export const loadLists = userId => (dispatch, getState) => {
  const url = GET_LISTING;

  const body = 'user_id=' + userId;

  console.log('from listing loadlists function', typeof userId, body);

  dispatch(
    apiRequest({
      url,
      method: 'POST',
      data: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      onSuccess: listingReceived.type,
    }),
  );
};

// Selector
export const getListings = state => state.entities.listings.listingDetails;
