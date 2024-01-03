import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice";
import userSlice from "./userSlice";
import loginPopSlice from './loginPop';
import productsSlice from "./productsSlice";


const store = configureStore(
    {
        reducer:{
            drop:dropDownSlice.reducer,
            user:userSlice.reducer,
            loginPop:loginPopSlice.reducer,
            products:productsSlice.reducer
        }
    }
)
export default store