import { errorReducer } from './errorReducer.js';

describe('errorReducer', () => {
  it('returns an error message with type ADD_ERROR', () => {
    const initialState = '';
    const mockState = 'hey';
    const mockAction = {
      type: 'ADD_ERROR',
      error: 'hey'
    }
    const newState = errorReducer(initialState, mockAction);
    expect(newState).toEqual(mockState);
  })
  it('should return an empty string with type of CLEAR_ERROR', () => {
    const initialState = {
      error: 'clear'
    }
    const mockAction = {
      type: 'CLEAR_ERROR', 
    }
    const mockState = '';
    const newState = errorReducer(initialState, mockAction);
    expect(newState).toEqual(mockState);
  })
})