import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {  User } from '../../types/index';




export const userInfo = createSlice({
    name: 'userInfo',
    initialState: {
        logged: false,
        userDetails: <User>{}
    },
    reducers: {
        userLogged: (state, action:PayloadAction<User>) => {
            state.logged = true
            state.userDetails = action.payload
        },
        userLogout: (state) => {
            state.logged = false
            state.userDetails = <User>{}
        }
    }
})

export const {userLogged,userLogout} = userInfo.actions
export const userSelector = (state: RootState) => state.userInfo;
export default userInfo.reducer