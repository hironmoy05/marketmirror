import { createSlice } from '@reduxjs/toolkit';
import { apiRequest } from './api';
import { createSelector } from 'reselect';


import {
  GET_LISTING,
  GET_LISTINGDETAIL,
  GET_DASHBOARD_CATEGORY_List,
} from '../constants/urls';

export const slice = createSlice({
  name: 'listings',
  initialState: {
    dashLists: [],
    listingDetails: [],
    filterdCategoryDetails: [],
    userDetails: []
  },
  reducers: {
    listingReceived: (listing, action) => {
      listing.listingDetails = action.payload;
    },
    dashListings: (dashListing, action) => {
      dashListing.dashLists = action.payload;
    },
    listingDetails: (state, action) => {
      state.userDetails = action.payload;
    }
  },
});

export const { listingReceived, getFilterdDetails, dashListings, listingDetails } = slice.actions;
export default slice.reducer;

// Action creators

export const dashLists =
  (userId, countryId, stateId, cityId) => (dispatch, getState) => {
    const url = GET_DASHBOARD_CATEGORY_List;

    const dataToSend = {
      user_id: userId,
      country_id: countryId,
      state_id: stateId,
      city_id: cityId,
    };

    const formDetails = [];

    for (let key in dataToSend) {
      const encodeKey = encodeURIComponent(key);
      const encodeValue = encodeURIComponent(dataToSend[key]);
      formDetails.push(`${encodeKey}=${encodeValue}`);
    }

    const body = formDetails.join('&');

    dispatch(
      apiRequest({
        url,
        method: 'POST',
        data: body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        onSuccess: dashListings.type,
      }),
    );
  };

export const loadLists = (deviceId, userId, keyword, category) => (dispatch, getState) => {
  const url = GET_LISTING;

  const dataToSend = {
    device_id: deviceId,
    user_id: userId,
    key: keyword,
    cat: category,
  };

  let formDetails = [];

  for (let key in dataToSend) {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(dataToSend[key]);
    formDetails.push(`${encodedKey}=${encodedValue}`);
  }

  const body = formDetails.join('&');
  console.log('check get Listing from listing reducer', body);

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

export const listDetails = (userId, listId) => (dispatch, getState) => {
  const url = GET_LISTINGDETAIL;

  const dataToSend = {
    user_id: userId,
    list_id: listId,
  };

  let formDetails = [];

  for (let key in dataToSend) {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(dataToSend[key]);
    formDetails.push(`${encodedKey}=${encodedValue}`);
  }

  const body = formDetails.join('&');
  console.log('check get Listing from listing reducer', body);

  dispatch(
    apiRequest({
      url,
      method: 'post',
      data: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      onSuccess: listingDetails.type,
    }),
  );
};



// Selector
export let getListings = state => state.entities.listings.listingDetails;

export const getDashListings = state => state.entities.listings.dashLists.Data;

export const getListingDetails = createSelector(
  state => state.entities.listings,
  listings => listings.userDetails?.Data,
)
