import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, checkTypes } from '../../utils/testUtils';
import Repository from './Repository';

describe('Repository ', () => {
  const setup = (props = { guesses: [] }, state = {}) => {
    const wrapper = shallow(<Repository { ...props }/>);
    wrapper.setState(state);
    return wrapper;
  };

  test('test prop types', () => {
    const result = checkTypes(Repository, { });

    expect(result)
      .toBeFalsy();
  });
});
