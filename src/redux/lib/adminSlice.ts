import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {  User } from '../../types/index';

type IAdmin ={
    id:string,
    email:string,
    uid:string,
    role:string,
    username:string,
}


export const adminInfo = createSlice({
    name: 'adminInfo',
    initialState: {
        logged: false,
        userDetails: <IAdmin>{}
    },
    reducers: {
        adminLogged: (state, action:PayloadAction<IAdmin>) => {
            state.logged = true
            state.userDetails = action.payload
        },
        adminLogout: (state) => {
            state.logged = false
            state.userDetails = <User>{}
        }
    }
})

export const {adminLogged,adminLogout} = adminInfo.actions
export const adminSelector = (state: RootState) => state.adminData;
export default adminInfo.reducer