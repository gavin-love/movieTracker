import React from 'react';
import { shallow } from 'enzyme';
import { LoginUser, mapDispatchToProps } from './LoginUser';
import { postNewUser } from '../../utilities/apiCalls/apiCalls';

jest.mock('../../utilities/apiCalls/apiCalls')

describe('LoginUser', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginUser />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should have an initial state', () => {
    const expected = {
      name: '',
      email: '', 
      password: ''
    }
    expect(wrapper.state()).toEqual(expected);
  })

describe('handleChange', () => {
  it.skip('should update state', () => {
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
    it.skip('should call postNewUser with the correct params', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }
      Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
      expect(postNewUser).toHaveBeenCalledWith(wrapper.state());
    })
    it.skip('should call handleCreateUser with the correct params', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }

      const mockUser = {
        id: 1
      }
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleCreateUser).toHaveBeenCalledWith(mockUser);
    })
    it.skip('should call clearError', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      } 
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleError).toHaveBeenCalled();
    })
  })

  describe('mapDispatchToProps', () => {
    it.skip('should call handleCreateUser with the right params', () => {
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

    it.skip('should call handleError with the right params', () => {
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

    it.skip('should call clearError with the right params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'CLEAR_ERROR', 
      }
      mappedProps.clearError();
      expect(mockDispatch).toHaveBeenCalled();
    })
  })