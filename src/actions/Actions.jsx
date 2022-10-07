// what to do part aka action part
export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const zNumber = () => {
  return {
    type: "NEUTRAL",
  };
};
