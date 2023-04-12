import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./producstSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
