import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import backgroundMapReducer from "./reducers/backgroundMapReducer"
import routeReducer from "./reducers/routeReducer"
import trailReducer from "./reducers/trailReducer"
const reducer = combineReducers({
  backgroundMapReducer,
  routeReducer,
  trailReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
