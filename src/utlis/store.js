import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../slices/appSlice";
import searchSlice from "../slices/searchSlice";
import chatSlice from "../slices/chatSlice";
import videoListSlice from "../slices/videoListSlice";

const store = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        chat : chatSlice,
        video_category : videoListSlice,
    }
});

export default store;