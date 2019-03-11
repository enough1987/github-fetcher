import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from '../../utils/testUtils';
import DataTable from './DataTable';

describe('DataTable ', () => {
  let defaultProps;
  let setup;

  beforeEach(() => {
    defaultProps = {
      columns: [],
      rows: []
    };

    setup = (props = defaultProps) => {
      const wrapper = shallow(<DataTable { ...props } />);

      return wrapper;
    };
  });

  test('should render data table', () => {
    const wrapper = setup();
    const table = findByAttr(wrapper, 'data-table');

    expect(table.exists())
      .toBe(true);
  });

  test('should render data table with virtual scroll', () => {
    const wrapper = setup();
    const table = findByAttr(wrapper, 'data-virtual-table');

    expect(table.exists())
      .toBe(true);
  });
});
