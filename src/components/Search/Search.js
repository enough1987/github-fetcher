import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button } from "react-bootstrap";

class Search extends Component {

    constructor(props) {
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
             <Form inline >
                <FormControl 
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" 
                    onChange={this.handleChange} 
                />
                <Button 
                    variant="secondary"
                    onClick={this.handleSearch} 
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

  Search.defaultProps = {
    search: () => { console.error('function is not provided'); }
  };
  
  export default Search;