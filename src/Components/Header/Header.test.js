import React from 'react';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should match the snapshot', () => {
    let mockProps = {
      user: {
        user_id: 1
      }
    }
    const wrapper = shallow(<Header {...mockProps} />)
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapStateToProps', () => {
  it('should map state to props', () => {
    const mockState = {
      user: {
        user_id: 1
      }
    }
    const expected = {
      user: {
        user_id: 1
      }
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
})

describe('mapDispatchToProps', () => {
  it('should map handleLogout to props', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockAction = {
      type: 'LOGOUT_USER'
    }
    mappedProps.handleLogout();
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
})