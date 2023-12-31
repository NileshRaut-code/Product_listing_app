import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice.js"
const store=configureStore({
   
    reducer:{
        cart:cartSlice,
    },


})

export default store;

