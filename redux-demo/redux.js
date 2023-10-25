
const redux = require("redux");
const createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers

/* step by step:
    1. define action/actions (object having attribute 'type')
    2. create action creators for action/actions or the task/tasks (functions having the action objs)
    3. create reducer(switch case function to carry out function/functions using the type attribute)
    4. create store for the reducer/reducers (can have only one store for the whole app)
    5. subscribe to the store
    6. dispatch the reducers
    7. unsubscribe from the store
     */

// state variables

const initialCakeState = {
  cakeCount: 10,
};
const initialIceCreamState = {
  iceCreamCount: 10,
};

// constants for the type attribute
const cakeOrder = "cakeOrder";
const cakeRestock = "cakeRestock";
const iceCreamOrder = "iceCreamOrder";
const iceCreamRestock = "iceCreamRestock";

/* actionCreators */
const orderCake = (qty = 1) => {
  return {
    type: cakeOrder,
    payload: qty,
  };
};
const restockCake = (qty = 1) => {
  return {
    type: cakeRestock,
    payload: qty,
  };
};

// Cake Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case cakeOrder:
      return {
        ...state,
        cakeCount: state.cakeCount - action.payload,
      };

    case cakeRestock:
      return {
        ...state,
        cakeCount: state.cakeCount + action.payload,
      };

    default:
      return state;
  }
};

// actionCreators
const orderIceCream = (qty = 1) => {
  return {
    type: iceCreamOrder,
    payload: qty,
  };
};
const restockIceCream = (qty = 1) => {
  return {
    type: iceCreamRestock,
    payload: qty,
  };
};

// IceCream Reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case iceCreamOrder:
      return {
        ...state,
        iceCreamCount: state.iceCreamCount - action.payload,
      };

    case iceCreamRestock:
      return {
        ...state,
        iceCreamCount: state.iceCreamCount + action.payload,
      };

    default:
      return state;
  }
};

// combining multiple reducers as the store takes upto only one argument
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// creating store
const store = createStore(rootReducer);
console.log("Initial state", store.getState());

// subscribing to store
const unsubscribe = store.subscribe(() =>
  console.log("Update State", store.getState())
);

// dispatching
store.dispatch(orderCake(2));
store.dispatch(orderCake(3));
store.dispatch(orderIceCream(5));
store.dispatch(restockCake(3));
store.dispatch(restockIceCream(1));

// unsubscribing
unsubscribe();
