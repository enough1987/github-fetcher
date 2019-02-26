import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, checkTypes } from "../../testUtils";
import Congrats from './Congrats';

const setup = (props = { show: false }, state = {}) => {
  const wrapper = shallow(<Congrats {...props}/>);
  wrapper.setState(state);
  return wrapper;
}

test('component is empty is show prop is false', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'component-congrats');
    
    expect ( component.text() )
        .toEqual("");
});

test('component has text if show prop is true', () => {
    const wrapper = setup({ show: true });
    const component = findByAttr(wrapper, 'component-congrats');

    expect ( component.text() )
        .toEqual("Yes, you did it");
});

test('test prop types', () => {
  const result = checkTypes(Congrats, { show: 'true' });

  expect(result === undefined);
})

