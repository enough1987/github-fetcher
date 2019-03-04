import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, checkTypes } from '../../utils/testUtils';
import GuessList from './GuessList';

const setup = (props = { guesses: [] }, state = {}) => {
  const wrapper = shallow(<GuessList { ...props }/>);
  wrapper.setState(state);
  return wrapper;
};

test('component is showing string when there are no guesses', () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, 'component-guess-list');

  expect(component.text())
    .toEqual('There are no guesses yet');
});

test('component is showing all guesses', () => {
  const wrapper = setup({ guesses: [ { guess: 'rest', mutch: 3 } ] });
  const components = findByAttr(wrapper, 'component-guess-item');

  expect(components)
    .toHaveLength(1);
});

test('test prop types', () => {
  const result = checkTypes(GuessList, { guesses: [] });

  expect(result)
    .toBeFalsy();
});
