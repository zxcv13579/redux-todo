import { createStore, combineReducers, compose } from "redux"
import count from "../reducer/count";

import todos from "../reducer/todos";
import visibilityFilter from "../reducer/visibilityFilter"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(combineReducers({ todos, visibilityFilter }), composeEnhancers())
export default Store