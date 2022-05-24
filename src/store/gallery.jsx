import { createSlice } from "@reduxjs/toolkit";
import { GET_BUSINESS_PROFILE_GALLERY } from "../constants/urls";
import { apiRequest } from "./api";
import { createSelector } from "reselect";

const slice = createSlice({
    name: 'gallery',
    initialState: [],
    reducers: {
        getProfilePhotos: (gallery, action) => {
            gallery.splice(0, gallery.length)
            gallery.push(action.payload);
        }
    }
});

export const { getProfilePhotos } = slice.actions;
export default slice.reducer;

// Action Creators
export const loadImages = (userId, listId) => (dispatch) => {
    const url = GET_BUSINESS_PROFILE_GALLERY;

    const dataToSend = {
        user_id: userId,
        list_id: listId,
    };

    let formDetails = [];

    for (let key in dataToSend) {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(dataToSend[key]);
        formDetails.push(`${encodedKey}=${encodedValue}`);
    };

    formDetails = formDetails.join('&');

    dispatch(
        apiRequest({
            url,
            method: 'POST',
            data: formDetails,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            onSuccess: getProfilePhotos.type
        })
    )
};

// Selectors
export const pics = createSelector(
    state => state.entities.gallerys,
    gallerys => gallerys,
)
