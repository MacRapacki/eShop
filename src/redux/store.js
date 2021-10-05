import { configureStore } from "@reduxjs/toolkit";

import allProductsReducer from "./allProductsSlice";
import basketReducer from "./basketSlice";

const store = configureStore({
  reducer: {
    shopProducts: allProductsReducer,
    basket: basketReducer,
  },
});
export default store;
