import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{
            email:'',
            token: ''
        }  
    },
    reducers:{
        isUser : (state,action) => {
            state.user = action.payload
        },
        noUser: (state) => {
            state.user = { email: '', token: '' }; 
        }
    }
})

export const {isUser,noUser} = userSlice.actions
export default userSlice.reducer