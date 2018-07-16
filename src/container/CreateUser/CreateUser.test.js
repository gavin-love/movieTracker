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
})