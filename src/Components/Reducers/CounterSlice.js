import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  array: [1, 2, 3, 4, 5],
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.value = state.value + action.payload;
    },
    clearArray:(state)=>{
        state.array=[];
    }
  },
});

const { reducer, actions } = CounterSlice;

export const { addNumber,clearArray } = actions;

export default reducer;
