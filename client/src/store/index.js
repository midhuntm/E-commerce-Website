import { configureStore } from "@reduxjs/toolkit";
import badgeSlice from "./badgeSlice";
import authSlice from './authSlice';
const store = configureStore({
    reducer : {
        cart : badgeSlice.reducer,
        auth : authSlice.reducer
    }
})

export default store;