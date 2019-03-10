import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from '../../utils/testUtils';
import Search from './Search';

describe('Search ', () => {
  let defaultProps;
  let setup;

  beforeEach(() => {
    defaultProps = { 
        search: jest.fn()
    };

    setup = (props = defaultProps) => {
      const wrapper = shallow(<Search { ...props } />);

      return wrapper;
    };
  });

  test('should render search form', () => {
    const wrapper = setup();
    const search = findByAttr(wrapper, 'form-search');

    expect(search.exists())
      .toBe(true);
  });

  test('should change state on onChenge of input', () => {
    const wrapper = setup();
    const input = findByAttr(wrapper, 'input-search');

    const event = {
        target: { value: 'test' }
    };

    input.simulate('change', event);

    expect( wrapper.state('searchValue') )
      .toBe('test');
  });

  test('should handle change value of input', () => {
    const wrapper = setup();
    const input = findByAttr(wrapper, 'input-search');

    const event = {
        target: { value: 'test' }
    };

    input.simulate('change', event);

    expect( wrapper.state('searchValue') )
      .toBe('test');
  });

  test('should handle click on button', () => {
    const wrapper = setup();
    const input = findByAttr(wrapper, 'button-search');

    input.simulate('click');

    expect( defaultProps.search )
        .toBeCalled();
  });

});
