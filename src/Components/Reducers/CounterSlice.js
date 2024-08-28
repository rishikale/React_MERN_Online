import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  products: [],
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.value = state.value + action.payload;
    },

    addProduct: (state, action) => {
      alert("Product has been added successfully..!!");
      state.products = [...state.products, action.payload];
    },
  },
});

const { reducer, actions } = CounterSlice;

export const { addNumber, addProduct } = actions;

export default reducer;
