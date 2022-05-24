import { createSlice } from "@reduxjs/toolkit";
import { GET_BUSINESS_PROFILE_VIDEO_GALLERY } from "../constants/urls";
import { apiRequest } from "./api";
import { createSelector } from "reselect";

const slice = createSlice({
    name: 'videoGallery',
    initialState: [],
    reducers: {
        getProfileVideos: (videoGallery, action) => {
            videoGallery.splice(0, videoGallery.length)
            videoGallery.push(action.payload);
        }
    }
});

export const { getProfileVideos } = slice.actions;
export default slice.reducer;

// Action Creators
export const loadVideos = (userId, listId) => (dispatch) => {
    const url = GET_BUSINESS_PROFILE_VIDEO_GALLERY;

    const dataToSend = {
        user_id: userId,
        list_id: listId,
        sid: 1,
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
            onSuccess: getProfileVideos.type
        })
    )
};

// Selectors
export const vids = createSelector(
    state => state.entities.videoGallerys,
    videoGallerys => videoGallerys,
)
