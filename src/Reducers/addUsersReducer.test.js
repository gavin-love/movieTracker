import addUsersReducer from './addUsersReducer';

describe('addUserReducer', () => {
  it('should return an object with a user_id', () => {
    const initialState = {};
    const mockAction = {
      type: 'ADD_USER', 
      user_id: 5
    }
    const mockState = {
      user_id: 5
    }
    const newState = addUsersReducer(initialState, mockAction);
    expect(newState).toEqual(mockState);
  })
  it('should return an empty object when logout user is called', () => {
    const initialState = {
      user_id: 2
    };
    const mockAction = {
      type: 'LOGOUT_USER',
    }
    const mockState = {}
    const newState = addUsersReducer(initialState, mockAction);
    expect(newState).toEqual(mockState);
  })
})