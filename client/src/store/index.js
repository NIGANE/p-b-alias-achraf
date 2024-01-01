import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice";
import userSlice from "./userSlice";
import loginPop from './loginPop'


const store = configureStore(
    {
        reducer:{
            drop:dropDownSlice.reducer,
            user:userSlice.reducer,
            loginPop:loginPop.reducer
        }
    }
)
export default store