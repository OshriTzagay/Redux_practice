import { combineReducers } from "redux";
import todosReducer from "./todos";

 const GlobalReducer = combineReducers({
  todos: todosReducer,
});

export default GlobalReducer;