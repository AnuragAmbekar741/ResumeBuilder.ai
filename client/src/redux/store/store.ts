import {configureStore} from "@reduxjs/toolkit"
import appSlice from "../slice/appSlice"
import userSlice from "../slice/userSlice"
const store = configureStore({
    reducer:{
        app : appSlice,
        user: userSlice
    }
})

export default store