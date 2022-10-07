// how to do the task part
//! requisites (initial state and the action to make the product of final state)

const initial = 0;

export const Task = (state = initial, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    case "NEUTRAL":
      return state = 0;
    default:
      return state;
  }
};
