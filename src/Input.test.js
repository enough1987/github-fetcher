import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from "./testUtils";
import { Input } from './Input';
import { storeFactory } from './testUtils';

const setup = (props = {}, state = {}) => {
  const store = storeFactory(props);
  const wrapper = shallow(<Input {...props} store={store} />);
  wrapper.setState(state);
  return wrapper;
}

test('on click add guess', () => {
  const wrapper = setup();
  const botton = findByAttr(wrapper, 'component-botton');
  botton.simulate('click');
  console.log( wrapper.debug() );

});