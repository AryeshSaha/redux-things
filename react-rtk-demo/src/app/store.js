// const reduxLogger = require("redux-logger");


import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import userReducer from '../features/user/userSlice'


// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger)
  // },
});

export default store;