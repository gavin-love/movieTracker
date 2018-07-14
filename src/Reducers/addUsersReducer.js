const addUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { user_id: action.user_id };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

export default addUsersReducer;
