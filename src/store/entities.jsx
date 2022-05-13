import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import forgotReducer from './forgot';
import verifyEmailReducer from './verifyEmailApi';
import verifyPhoneReducer from './verifyPhoneApi';
import listingsReducer from './listing';
import locationListingReducer from './localtionListing';
import usersReducer from './users';
import galleryReducer from './gallery';

export default combineReducers({
  bugs: bugsReducer,
  forgot: forgotReducer,
  verifyEmail: verifyEmailReducer,
  verifyPhone: verifyPhoneReducer,
  listings: listingsReducer,
  locationListings: locationListingReducer,
  users: usersReducer,
  gallerys: galleryReducer,
});
