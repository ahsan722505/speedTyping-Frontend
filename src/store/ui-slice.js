import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const uiSlice=createSlice({
    name : "ui",
    initialState : {
        socket : io("http://192.168.10.13:8080"),
       showHome : true,
       showComp : false,
       username : "",
       totalCharacters : 0,
       startingTime : null
       
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
        }
        
        
    }

})
export const uiActions = uiSlice.actions;
export default uiSlice;