import { createSlice } from "@reduxjs/toolkit";

export const userslice =createSlice({
    name: "Login",
    initialState: {
        login:null
    },
    reducers:{
        logedInuse:(state,action)=>{
         state.login =action.payload
        },
        logedout:(state,action)=>{
            state.login =null

        }
    }
})

export const {logedInuse,logedout} = userslice.actions

export default userslice.reducer