import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{
            name:'',
            email:'',
            picture:''
        }  
    },
    reducers:{
        isUser : (state,action) => {
            state.user = action.payload
        }
    }
})

export const {isUser} = userSlice.actions
export default userSlice.reducer