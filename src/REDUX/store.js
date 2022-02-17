import { createStore } from "redux";
import GlobalReducer from "./reducers";

const store = createStore(GlobalReducer, {
  todos: [
    { title: "Clean-The-House", isCompleted: false },
    { title: "Go To GYM", isCompleted: false },
  ],
});

export default store;
