import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from "./testUtils";
import { Input } from './Input';
import { storeFactory } from './testUtils';

const setup = (props = {}, initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input {...props} store={store} />);

  return wrapper;
}

test('on click add guess', () => {
  const props = { show: true }
  const initialState = { ...props, correctGuess: "test" }
  const wrapper = setup(initialState);
  console.log( wrapper.html() );
  const button = findByAttr(wrapper, 'component-button');
  button.simulate('click');
  console.log( wrapper.debug() );

});