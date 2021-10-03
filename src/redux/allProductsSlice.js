import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: ["test", "test2"],
  status: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

const allProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },

    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },

    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = allProducts.actions;

export default allProductsSlice.reducer;
