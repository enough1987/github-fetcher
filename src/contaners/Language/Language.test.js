import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, checkTypes } from '../../utils/testUtils';
import Language from './Language';

describe('Language ', () => {

  const setup = (props = { guesses: [] }, state = {}) => {
    const wrapper = shallow(<Language { ...props }/>);
    wrapper.setState(state);
    return wrapper;
  };

  test('test prop types', () => {
    const result = checkTypes(Language, { });

    expect(result)
      .toBeFalsy();
  });

});
