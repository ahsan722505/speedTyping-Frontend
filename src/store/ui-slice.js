import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const uiSlice=createSlice({
    name : "ui",
    initialState : {
        socket : io("http://192.168.10.13:8080"),
       showHome : true,
       showComp : false,
       username : "",
       
    },
    reducers : {
        showComp(state){
            state.showHome=false;
            state.showComp=true;
        },
        setUsername(state,action){
            state.username=action.payload.username;
        },
        
        
    }

})
export const uiActions = uiSlice.actions;
export default uiSlice;