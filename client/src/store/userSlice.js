import { createSlice } from "@reduxjs/toolkit";



const init = {
    signed :false,
    userinfo:{
         name:"",
         email:'',
         password:''
    }
   

}
const userSlice= createSlice({
    name:"userSlice",
    initialState:init,
    reducers:{
        newLogin:(state,action)=>{
            const {name,email,password} = action.payload
            state.signed=true
            state.userinfo = {name,email,password}
        }
    }
})

export default userSlice;
export const userActions = userSlice.actions