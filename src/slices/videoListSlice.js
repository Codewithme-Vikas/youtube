import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
    name: 'videoList',
    initialState: {
        category: { tag: 'All', id: '0' },
        videos: [],
    },
    reducers: {
        addVideos: (state, action) => {

            // state.videos.push([...action.payload, ...state.videos]); // why this is not working? - In Redux Toolkit, you should not mutate the state directly. Instead, you should return a new state object with the updated values.
            
            state.videos = [ ...state.videos, ...action.payload ]
        },
        clearVideo: (state) => {
            state.videos = [];
        },

        // category related reducer functions
        setCategory: (state, action) => {
            state.category = action.payload
        },
    }
});

export const { addVideos, clearVideo, setCategory } = videoListSlice.actions;
export default videoListSlice.reducer;