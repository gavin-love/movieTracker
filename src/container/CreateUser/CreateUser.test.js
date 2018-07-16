import React from 'react';
import { shallow } from 'enzyme';
import { CreateUser, mapDispatchToProps } from './CreateUser';

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
})



