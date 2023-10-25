// not fully clear about what a slice is but all i know is that actions actionCreators and reducers are combined in this
const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  cakeCount: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.cakeCount--;
    },
    restocked: (state, action) => {
      state.cakeCount += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
