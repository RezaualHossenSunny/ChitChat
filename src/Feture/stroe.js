import { configureStore } from "@reduxjs/toolkit";
import Loginslice from './Slices/Loginslice.jsx'

const store = configureStore({
    reducer:{
        login:Loginslice
    }
})

export default store