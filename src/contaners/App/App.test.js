import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from '../../utils/testUtils';
import { App } from './App';

let getGuesses;
let defaultProps;
let setup;

beforeEach(() => {
  getGuesses = jest.fn();
  defaultProps = { getGuesses };

  setup = (props = defaultProps, state = {}) => {
    const wrapper = shallow(<App { ...props }/>);
    wrapper.setState(state);
    return wrapper;
  };
});

afterEach(() => {
  getGuesses.mockClear();
});

test('init successfuly', () => {
  const wrapper = setup();
  const app = findByAttr(wrapper, 'App');

  expect(app)
    .toBeTruthy();
});
