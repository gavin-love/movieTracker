import React from 'react';
import { Header } from './Header';
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