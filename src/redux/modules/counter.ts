// src/features/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  number: number;
}

const initialState: CounterState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1; // immer 덕분에 직접 수정 가능
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
