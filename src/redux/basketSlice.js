import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInBasket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = { ...action.payload, ...{ quantity: 1 } };
      const index = state.itemsInBasket.findIndex(
        (itemInBasket) => itemInBasket.id === item.id
      );
      if (index >= 0) {
        state.itemsInBasket[index].quantity += 1;
      } else {
        state.itemsInBasket.push(item);
      }
    },

    removeItem: (state, action) => {
      const index = action.payload;

      if (state.itemsInBasket[index].quantity === 1) {
        state.itemsInBasket.splice(index, 1);
      } else {
        state.itemsInBasket[index].quantity -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = basketSlice.actions;

export default basketSlice.reducer;
