import { createSlice } from "@reduxjs/toolkit";

import { chatElementOnPage } from "../utlis/constant";

const chatSlice = createSlice({
    name : 'chat',
    initialState : {
        messages : [
            
            {
                name : "DrawBack",
                message : "Now name and message is generated mannually!"
            },
            {
                name : "Problem",
                message : "YouTube API - live streaming not accessable now"
            },
            {
                name : "Start",
                message : "starting 4 messages are intialize in redux store"
            },
            {
                name : "limit",
                message : "only last 30 message will be displayed!"
            },
            
        ],
    },
    reducers : {
        addMessages : ( state , action )=>{
            state.messages.splice( chatElementOnPage ); // limit the size of array - 30
            state.messages.unshift( ...action.payload ); //payload can have mulitple objects --> array of objects
        },
        clearChat : (state)=>{
            state.messages = [];
        }
    }
});


export const { addMessages, clearChat } = chatSlice.actions;
export default chatSlice.reducer;