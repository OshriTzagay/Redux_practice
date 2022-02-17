const usersReducer = (state, action) => {
  const [type, payload] = action;
  switch (type) {
    case "LOG-IN":
      return (state = payload);
      break;

    default:
      return state;
      break;
  }
};

export default usersReducer;
