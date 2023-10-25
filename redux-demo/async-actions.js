const redux = require("redux");
const createStore = redux.legacy_createStore;
const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

// state variable
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// constant strings
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// action creators
const request = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const success = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const failure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

// Async action creators
const fetchUserIds = () => {
  // convention is to have dispatch as the parameter but i try nonsense words just to check
  return async(dis) => {
    dis(request());
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     const users = response.data.map((user) => user.id);
    //     dispatch(success(users));
    //   })
    //   .catch((error) => {
    //     dispatch(failure(error.message));
    //   });

    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const users = response.data.map((user) => user.id);
      dis(success(users));
    }
    catch(error) {
      dis(failure(error.message));
    }
    finally {
      console.log("i like async await method(es7) better than then catch finally method(es6)");
    };
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUserIds());
