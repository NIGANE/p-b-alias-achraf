import { createSlice } from '@reduxjs/toolkit'

const init = {
    pop : false
}

const loginPopSlice = createSlice({
    name:"loginPopSlice",
    initialState:init,
    reducers:{
        show:(state,action)=>{
            state.pop = true
        },
        hide:(state,action)=>{
            state.pop = false
        }
    }
})

export default loginPopSlice;
export const { show ,hide } = loginPopSlice.actions