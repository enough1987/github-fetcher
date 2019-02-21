import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from "./testUtils";
import App from './App';

const setup = (props = {}, state = {}) => {
  const wrapper = shallow(<App {...props}/>);
  wrapper.setState(state);
  return wrapper;
}

test('increment counter', () => {
  const wrapper = setup();
  const botton = findByAttr(wrapper, 'btn-increment');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(1);
});

test('decrement counter', () => {
  const wrapper = setup({}, { counter: 10 });
  const botton = findByAttr(wrapper, 'btn-decrement');
  botton.simulate('click');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(8);
});

test('counter should not be less than zero', () => {
  const wrapper = setup({}, { counter: 1 });
  const botton = findByAttr(wrapper, 'btn-decrement');
  botton.simulate('click');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(0);
});