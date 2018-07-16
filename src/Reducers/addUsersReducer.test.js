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
})