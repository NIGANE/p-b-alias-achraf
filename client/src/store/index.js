import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice";
import userSlice from "./userSlice";
import loginPopSlice from './loginPop';
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import showPanierSlice from "./showPanierSlice";


const store = configureStore(
    {
        reducer:{
            drop:dropDownSlice.reducer,
            user:userSlice.reducer,
            loginPop:loginPopSlice.reducer,
            products:productsSlice.reducer,
            cart:cartSlice.reducer,
            panier:showPanierSlice.reducer

        }
    }
)
export default store