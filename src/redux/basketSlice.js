import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInBasket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemsInBasket = action.payload;
    },

    removeItem: (state, action) => {
      state.itemsInBasket = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = basketSlice.actions;

export default basketSlice.reducer;
