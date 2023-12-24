import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice";

const store = configureStore(
    {
        reducer:{
            drop:dropDownSlice.reducer
        }
    }
)
export default store