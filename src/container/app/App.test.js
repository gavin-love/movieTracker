import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('app', () => {
  let mockHandleMovies;
  let wrapper;

  beforeEach(() => {
  mockHandleMovies = jest.fn();
  wrapper = shallow(<App 
    handleMovies={mockHandleMovies}/>
    );
  })

  it('Should return an array of movies', async () => {
    const expected = [{}, {}, {}];
    await wrapper.instance().getMovies();
    await expect(wrapper.instance().getMovies).toEqual(expected);
  })
})