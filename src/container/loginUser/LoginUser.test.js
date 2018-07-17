import React from 'react';
import { shallow } from 'enzyme';
import { LoginUser, mapDispatchToProps } from './LoginUser';
import { getUser } from '../../utilities/apiCalls/apiCalls';

jest.mock('../../utilities/apiCalls/apiCalls')

describe('LoginUser', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginUser />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have an initial state', () => {
    const expected = {
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
        value: 'dog'
      }
    }
    const expected = {
        name: 'dog',
        email: '', 
        password: ''
      }
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
    })
  })

  describe('handleSubmit', () => {
    it.skip('should call getUser with the correct params', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }
      console.log(wrapper.state())
      await Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
      await expect(getUser).toHaveBeenCalledWith({email: 'email', password: 'password'});
    })

    it.skip('should call handleLogin with the correct params', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }

      const mockUser = {
        id: 1
      }

      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleLogin).toHaveBeenCalledWith(mockUser);
    })

    it.skip('should call loadFavorites', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      } 
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleError).toHaveBeenCalled();
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call handleLogin with the right params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_USER', 
        user_id: 4
      }
      const mockUser = {
        id: 4
      }
      mappedProps.handleLogin(mockUser);
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