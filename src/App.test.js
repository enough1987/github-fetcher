import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

const setup = (props = {}, state = {}) => {
  const wrapper = shallow(<App {...props}/>);
  wrapper.setState(state);
  return wrapper;
}
const find = (wrapper, name) => {
  return wrapper.find(`[data-test='${name}']`);
}

test('increment counter', () => {
  const wrapper = setup();
  const botton = find(wrapper, 'btn-increment');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(1);
});

test('decrement counter', () => {
  const wrapper = setup({}, { counter: 10 });
  const botton = find(wrapper, 'btn-decrement');
  botton.simulate('click');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(8);
});

test('counter should not be less than zero', () => {
  const wrapper = setup({}, { counter: 1 });
  const botton = find(wrapper, 'btn-decrement');
  botton.simulate('click');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(0);
});