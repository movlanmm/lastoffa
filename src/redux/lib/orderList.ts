import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const orderSlice = createSlice({
    name:'orderData',
    initialState:{
        orders: <string[]>[]
    },
    reducers:{
        addOrder:(state,action)=>{
            state.orders.push(action.payload)
        },
        cleanOrder: state=>{
            state.orders = []
        },
        getUserOrders: (state, action) => {
            state.orders = [...action.payload]
        },
    }
})

export const {addOrder,cleanOrder,getUserOrders} = orderSlice.actions
export const orderSelector = (state: RootState) => state.orderData;
export default orderSlice.reducer