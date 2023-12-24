import { createSlice  } from '@reduxjs/toolkit'

const init = {
    drop :false
}

const dropDownSlice = createSlice(
    {
        name:'dorpDown',
        initialState:init,
        reducers:{
            droping:(state,action)=>{
                state.drop = true
            },
            notDroping:(state,action)=>{
                state.drop = false
            }
        }
    }
)

export default dropDownSlice
export const dropDownActions =  dropDownSlice.actions

