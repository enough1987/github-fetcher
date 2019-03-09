import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    VirtualTable,
    TableHeaderRow,
  } from '@devexpress/dx-react-grid-bootstrap4';

const getRowId = row => row.id;

class DataTable extends Component {
  
    render () {
      const Root = props => <Grid.Root {...props} style={this.props.styles} />;

      return (
          <div className="component-data-table"
            data-test="component-data-table" >
            <Grid
              rows={this.props.rows}
              columns={this.props.columns}
              getRowId={getRowId}
              rootComponent={Root}
            >
              <VirtualTable
                height="auto"
              />
              <TableHeaderRow />
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
  }
  
  export default DataTable;
  