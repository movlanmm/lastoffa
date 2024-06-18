import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from '../../types/index';


export const productsSlice = createSlice({
    name:'productsData',
    initialState:{
        products:<Product[]>[]
    },
    reducers:{
        getProducts:(state,action)=>{
            state.products = [...action.payload]
        },
        updateProduct: (state,action)=>{
            const found = state.products.find(item=> item.id === action.payload.id)
            if(found){
                const index = state.products.indexOf(found)
                state.products[index] = action.payload
            }
        }

    }
})

export const {getProducts,updateProduct} = productsSlice.actions
export const productsSelector = (state: RootState) => state.productsData;
export default productsSlice.reducer