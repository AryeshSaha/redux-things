const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  iceCreamCount: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.iceCreamCount -= action.payload;
    },
    restocked: (state) => {
      state.iceCreamCount++;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
