import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const showCartMenu = createSlice({
    name: 'showCartMenu',
    initialState: {
        showCart: false
    },
    reducers: {
        showcart: (state) => {
            state.showCart = true
        },
        hidecart: (state) => {
            state.showCart = false
        },
    }
})

export const { showcart, hidecart } = showCartMenu.actions
export const showcartSelector = (state: RootState) => state.showCartMenu;
export default showCartMenu.reducer