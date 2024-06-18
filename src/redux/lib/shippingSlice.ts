import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const shippingSlice = createSlice({
    name: 'shippingData',
    initialState: {
        type: 'Free Shipping',
        amount: 0
    },
    reducers: {
        freeShipping: state=>{
            state.type = 'Free shipping'
            state.amount = 0
        },
        flatRate: (state) => {
            state.type = 'Flat rate'
            state.amount = 49
        },
        localPick: state => {
            state.type = 'Local pickup'
            state.amount = 8
        }
    }
})

export const {flatRate,localPick,freeShipping} = shippingSlice.actions
export const shippingSelector = (state: RootState) => state.shippingData;
export default shippingSlice.reducer