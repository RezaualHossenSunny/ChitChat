import { configureStore } from "@reduxjs/toolkit";
import Loginslice from './Slices/Loginslice.jsx'
import ActiveSingleSlice  from "./Slices/ActiveSingleSlice.jsx";

const store = configureStore({
    reducer:{
        login:Loginslice,
        active:ActiveSingleSlice
    }
})

export default store