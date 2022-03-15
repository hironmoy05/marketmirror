import {combineReducers} from 'redux';
import bugsReducer from './bugs';
import forgotReducer from './forgot';
import verifyEmailReducer from './verifyEmailApi';
import listingsReducer from './listing';
import dashboardReducer from './dashboard';
import locationListingReducer from './localtionListing';

export default combineReducers({
  bugs: bugsReducer,
  forgot: forgotReducer,
  verifyEmail: verifyEmailReducer,
  listings: listingsReducer,
  dashboard: dashboardReducer,
  locationListings: locationListingReducer,
});
