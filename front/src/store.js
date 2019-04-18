import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import backgroundMapReducer from "./reducers/backgroundMapReducer"
import routeReducer from "./reducers/routeReducer"
const reducer = combineReducers({ backgroundMapReducer, routeReducer })

const store = createStore(reducer, applyMiddleware(thunk))

export default store
