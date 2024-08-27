import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Components/Reducers/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    // modifyArray:arraySlice
  },
});

export default store;
