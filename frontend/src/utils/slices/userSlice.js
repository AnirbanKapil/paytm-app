import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : "user",
    initialState : {
        info : []
    },
    reducers : {
        addUser : (state,action) => {
           state.info.push(action.payload)  
        },
        removeUser : (state) => {
            state.info.pop()
        }
    }
})

export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer