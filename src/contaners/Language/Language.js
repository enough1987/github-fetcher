/* eslint react/no-array-index-key: 0 */ // --> OFF
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLanguage } from '../../store/actions/language';
import DataTable from '../../components/DataTable/DataTable';
import Search from '../../components/Search/Search';

const columns = [
  { name: 'name', title: 'Repo name' },
  { name: 'stargazers_count', title: 'Stars' },
  { name: 'watchers_count', title: 'Watchers' }
];

class Language extends Component {

  constructor (props) {
    super(props);
  }

  search = (val) => {
    this.props.getLanguage(val);
  };

  render () {
    return (
        <div className="component-language"
          data-test="component-language" >
          <Search 
            search={this.search}
          />
          <DataTable 
              rows={this.props.repos}
              columns={columns}
              styles={ {height: '1000px'} }
          />
        </div>
    );
  }
}

Language.path = 'language';
Language.navigationOptions = () => ({
  title: 'language',
  linkName: 'language'
});


Language.propTypes = {
};

const mapStateToProps = state => ({
  repos: state.language.repos
});

const mapDispatchToProps = dispatch => ({
  getLanguage: (val) => dispatch(getLanguage(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language);
