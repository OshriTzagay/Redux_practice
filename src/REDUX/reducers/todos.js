const todosReducer = (state = [], action) => {
  const {type, payload} = action;
  switch (type) {
    case "TODO_ADD":
      return [...state, payload];
      break;

    default:
      return state;
      break;
  }
};

export default todosReducer;
