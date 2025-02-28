import { createSlice } from "@reduxjs/toolkit";


export const ActiveSingleSlice =createSlice({
    name: "Single",
    initialState: {
       active: JSON.parse(localStorage.getItem( "active")) || null
    },
    reducers:{
        ActiveSingle:(state,action)=>{
          state.active = action.payload
        }
    }
})

export const {ActiveSingle} = ActiveSingleSlice.actions;

export default ActiveSingleSlice.reducer