const addUsersReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {user_id: action.user_id};
    default: 
      return state;
  }
}

export default addUsersReducer;