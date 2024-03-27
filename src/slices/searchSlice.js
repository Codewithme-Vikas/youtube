import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search,',
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            // {"iphone" : ["iphone pro","iphone 14"] }  --> payload will be look like this

            // state = { ...state,...action.payload }  --> not working , why? i don't know
            state = Object.assign(state,action.payload)
        },
    }
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;