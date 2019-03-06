import React from 'react';
import { shallow } from 'enzyme';

import { Counter } from './Counter';
import { findByAttr } from '../../utils/testUtils';

describe('Counter', () => {
  
  let getGuesses;
  let defaultProps;
  let setup;

  beforeEach(() => {
    getGuesses = jest.fn();
    defaultProps = { getGuesses };

    setup = (props = defaultProps, state = {}) => {
      const wrapper = shallow(<Counter { ...props }/>);
      wrapper.setState(state);
      return wrapper;
    };
  });

  afterEach(() => {
    getGuesses.mockClear();
  });

  test('increment counter', () => {
    const wrapper = setup();
    const botton = findByAttr(wrapper, 'btn-increment');
    botton.simulate('click');

    expect(wrapper.state('counter'))
      .toEqual(1);
  });

  test('decrement counter', () => {
    const wrapper = setup(defaultProps, { counter: 10 });
    const botton = findByAttr(wrapper, 'btn-decrement');
    botton.simulate('click');
    botton.simulate('click');

    expect(wrapper.state('counter'))
      .toEqual(8);
  });

  test('counter should not be less than zero', () => {
    const wrapper = setup(defaultProps, { counter: 1 });

    const botton = findByAttr(wrapper, 'btn-decrement');
    botton.simulate('click');
    botton.simulate('click');

    expect(wrapper.state('counter'))
      .toEqual(0);
  });

});
