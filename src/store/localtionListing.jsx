import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {apiRequest} from './api';

import {
  GET_COUNTRYLISTING,
  GET_STATELISTING,
  GET_CITYLISTING,
} from '../constants/urls';

export const slice = createSlice({
  name: 'locationListing',
  initialState: {
    countryListing: [],
    stateListing: [],
    cityListing: [],
  },
  reducers: {
    getCountryListing: (countryListing, action) => {
      countryListing.countryListing = action.payload;
    },
    getStateListing: (stateListing, action) => {
      stateListing.stateListing = action.payload;
    },
    getCityListing: (cityListing, action) => {
      cityListing.cityListing = action.payload;
    },
  },
});

export const {getCountryListing, getStateListing, getCityListing} =
  slice.actions;
export default slice.reducer;

// Action Creators
export const getCountryLists = () => (dispatch, getState) => {
  const url = GET_COUNTRYLISTING;

  console.log('from country store', url);
  dispatch(
    apiRequest({
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      onSuccess: getCountryListing.type,
    }),
  );
};

export const getStateLists = countryId => (dispatch, getState) => {
  const url = GET_STATELISTING;

  const body = 'country_id=' + countryId;

  dispatch(
    apiRequest({
      url,
      method: 'POST',
      data: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      onSuccess: getStateListing.type,
    }),
  );
};

export const getCityLists = stateId => (dispatch, getState) => {
  const url = GET_CITYLISTING;

  const body = `state_id=${stateId}`;

  console.log('from location store', body);

  dispatch(
    apiRequest({
      url,
      method: 'POST',
      data: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      onSuccess: getCityListing.type,
    }),
  );
};

// Selector
export const countryListing = createSelector(
  state => state.entities.locationListings,
  locationListing => locationListing.countryListing.Data,
);

export const statesListing = createSelector(
  state => state.entities.locationListings,
  locationListing => locationListing.stateListing.Data,
);

export const cityListing = createSelector(
  state => state.entities.locationListings,
  locationListing => locationListing.cityListing.Data,
);
