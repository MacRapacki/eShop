import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./allProductsSlice";

const store = configureStore({
  reducer: {
    shopProducts: allProductsReducer,
  },
});
export default store;
