const addMoviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES': 
      return [...state, action];
    default: return state;
  }
}

export default addMoviesReducer;