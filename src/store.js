import { legacy_createStore as createStore } from 'redux'
import { Reducers } from './reducers/Reducers'

export const store = createStore( Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
