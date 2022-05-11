import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiRequest } from './api';
import { UPDATE_PROFILE } from '../constants/urls';

const slice = createSlice({
    name: 'users',
    initialState: {
        profilePhoto: '',
        updatedInfo: []
    },
    reducers: {
        getUserPhoto: (users, action) => {
            users.profilePhoto = action.payload;
        },
        userInfoUpdated: (users, action) => {
            console.log('from reducers', action.payload);
            users.updatedInfo.push(action.payload)
        }
    },
});

export const { getUserPhoto, userInfoUpdated } = slice.actions;
export default slice.reducer;

// Action Creators
export const updateProfileInfo = (id, address, country, state, city, gender, dob, occupation) => (dispatch,) => {
    const url = UPDATE_PROFILE;

    const dataToSend = {
        user_id: id,
        address1: address,
        country,
        state,
        city,
        gender,
        dob,
        occupation
    };

    let formDetails = [];

    for (let key in dataToSend) {
        const encodedKey = encodeURIComponent(key);
        const encodeValue = encodeURIComponent(dataToSend[key]);
        formDetails.push(`${encodedKey}=${encodeValue}`);
    };

    formDetails = formDetails.join('&');

    dispatch(apiRequest({
        url,
        method: 'POST',
        data: formDetails,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        onSuccess: userInfoUpdated.type
    }))
}

// Selectors
export const getProfilePic = createSelector(
    state => state.entities.users,
    users => users.filter(image => image.pic !== undefined)
);


