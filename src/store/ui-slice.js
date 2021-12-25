import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const uiSlice=createSlice({
    name : "ui",
    initialState : {
        socket : io("https://afternoon-ravine-07921.herokuapp.com/"),
       showHome : true,
       showComp : false,
       username : "",
       totalCharacters : 0,
       startingTime : null,
       carWidth : null
       
    },
    reducers : {
        showComp(state){
            state.showHome=false;
            state.showComp=true;
        },
        setUsername(state,action){
            state.username=action.payload.username;
        },
        setTotalCharacters(state,action){
            state.totalCharacters=action.payload;
        },
        setStartingTime(state,action){
            state.startingTime=action.payload;
        },
        setCarWidth(state,action){
            state.carWidth=action.payload;
        },
        
        
    }

})
export const uiActions = uiSlice.actions;
export default uiSlice;