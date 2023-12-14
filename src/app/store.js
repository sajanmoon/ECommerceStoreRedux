import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/cart/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});
