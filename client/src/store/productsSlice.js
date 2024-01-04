import { createSlice } from "@reduxjs/toolkit";

const init = {
  products: [],
  len: 0,  
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: init,
  reducers: {
    put: (state, action) => {
      state.products = [...action.payload];
      state.len = state.products.length;
    }
  },
});

export default productsSlice;
export const { put, addToCart } = productsSlice.actions;
