// !not fully clear about what a slice is but all i know is that actions actionCreators and reducers are combined in this
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cakeCount: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.cakeCount -= action.payload;
    },
    restocked: (state, action) => {
      state.cakeCount += action.payload;
    },
  },
});

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
