import React from 'react';
import { shallow } from 'enzyme';
import { CreateUser, mapDispatchToProps } from './CreateUser';
import { postNewUser } from '../../utilities/apiCalls/apiCalls';

jest.mock('../../utilities/apiCalls/apiCalls')

describe('CreateUser', () => {
  let wrapper;
  let mockHandleCreateUser;
  let mockHandleError;

  beforeEach(() => {
    mockHandleCreateUser = jest.fn();
    mockHandleError = jest.fn();
    wrapper = shallow(<CreateUser 
      handleCreateUser={mockHandleCreateUser} 
      handleError={mockHandleError}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have an initial state', () => {
    const expected = {
      name: '',
      email: '', 
      password: ''
    }
    expect(wrapper.state()).toEqual(expected);
  })

describe('handleChange', () => {
  it('should update state', () => {
    let mockEvent = {
      target: {
        name: 'name',
        value: 'cat'
      }
    }
    const expected = {
        name: 'cat',
        email: '', 
        password: ''
      }
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
    })
  })

  describe('handleSubmit', () => {
    it('should call postNewUser with the correct params', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }
      Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
      expect(postNewUser).toHaveBeenCalledWith(wrapper.state());
    })
    it('should call handleCreateUser with the correct params', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }

      const mockUser = {
        id: 1
      }
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleCreateUser).toHaveBeenCalledWith(mockUser);
    })
    it('should call clearError', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      } 
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleError).toHaveBeenCalled();
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call handleCreateUser with the right params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_USER', 
        user_id: 4
      }
      const mockUser = {
        id: 4
      }
      mappedProps.handleCreateUser(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

    it('should call handleError with the right params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_ERROR', 
        error: 'error'
      }
      const mockError = 'error';

      mappedProps.handleError(mockError);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })
  })

    it('should call clearError with the right params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'CLEAR_ERROR', 
      }
      mappedProps.clearError();
      expect(mockDispatch).toHaveBeenCalled();
    })
  })




