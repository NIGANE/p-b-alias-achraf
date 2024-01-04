import { createSlice  } from '@reduxjs/toolkit'

const init = {
    showPanier :false
}

const showPanierSlice = createSlice(
    {
        name:'showPanier',
        initialState:init,
        reducers:{
            showPanier:(state,action)=>{
                state.showPanier = true
            },
            hidePanier:(state,action)=>{
                state.showPanier = false
            }
        }
    }
)

export default showPanierSlice
export const {showPanier,hidePanier} =  showPanierSlice.actions

