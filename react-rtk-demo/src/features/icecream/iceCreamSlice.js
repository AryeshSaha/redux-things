import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iceCreamCount: 100,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.iceCreamCount -= action.payload;
    },
    restocked: (state, action) => {
      state.iceCreamCount += action.payload;
    },
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
