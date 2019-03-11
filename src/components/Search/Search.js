import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

    handleChange = (e) => {
      this.setState({
        searchValue: e.target.value
      });
    }

    handleSearch = () => {
      this.props.search(this.state.searchValue);
    }

    render () {
      return (
          <div className="component-data-search"
            data-test="component-data-search" >
              <Form inline
                data-test="form-search" >
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={ this.handleChange }
                    data-test="input-search"
                  />
                  <Button
                    variant="secondary"
                    onClick={ this.handleSearch }
                    data-test="button-search"
                  >
                    Search
                  </Button>
              </Form>
          </div>
      );
    }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

Search.defaultProps = { /* eslint-disable no-console */
  search: () => { console.error('function is not provided'); }
};

export default Search;
