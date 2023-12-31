import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload); 
        },
        removItem:(state)=>{
            state.items=[]
        },
    },
});

export const{addItems,removItem}=cartSlice.actions;

export default cartSlice.reducer;
