import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const loadingSlice = createSlice({
    name:'loading',
    initialState:{
        loading: false
    },
    reducers:{
        loadingStart:(state)=>{
            state.loading = true
        },
        loaded: state=>{
            state.loading = false
        }
    }
})

export const {loadingStart,loaded} = loadingSlice.actions
export const loadingSelector = (state: RootState) => state.loadingData;
export default loadingSlice.reducer