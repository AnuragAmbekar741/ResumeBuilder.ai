import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../types/appState"


const appSlice = createSlice({
    name:'app',
    initialState: {
    isSigninSignup: false
    } as AppState,
    reducers : {
        toggleSigninForm: (state,action) => {
            state.isSigninSignup = action.payload
        }
    }
})

export const { toggleSigninForm } = appSlice.actions;
export default appSlice.reducer;