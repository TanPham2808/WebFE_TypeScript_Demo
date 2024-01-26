import {createSlice} from "@reduxjs/toolkit";

const initalState={
    menuProduct:[],
};

export const menuProductSlice = createSlice({
    name:"MenuProduct",
    initialState: initalState,
    reducers:{
        setMenuProduct:(state,action) =>{
            state.menuProduct = action.payload;
        },
    }
})

export const{setMenuProduct} = menuProductSlice.actions;
export const menuProductReducer = menuProductSlice.reducer;