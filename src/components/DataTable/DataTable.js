import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  Table
} from '@devexpress/dx-react-grid-bootstrap4';

const getRowId = row => row.id;

class DataTable extends Component {
  render () {
    const Root = props => <Grid.Root { ...props } style={ this.props.styles } />;
    Table.NoDataCell = 'try to search';

    return (
        <div className="component-data-table"
          data-test="data-table" >
            <Grid
              rows={ this.props.rows }
              columns={ this.props.columns }
              getRowId={ getRowId }
              rootComponent={ Root }
              data-test="data-grid" 
            >
                <VirtualTable
                  height="auto"
                  data-test="data-virtual-table" 
                />
                <Table
                />
                <TableHeaderRow
                />
            </Grid>
        </div>
    );
  }
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  styles: PropTypes.object
};

DataTable.defaultProps = {
  columns: [],
  rows: [],
  styles: { height: '100%' }
};

export default DataTable;
