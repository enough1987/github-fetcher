import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRepository } from '../../store/actions/repository';
import DataTable from '../../components/DataTable/DataTable';
import Search from '../../components/Search/Search';

const columns = [
  { title: 'Repository',
    name: 'git_url',
    getCellValue: (row) => {
      return <a href={ row.svn_url } target="_blank" rel="noopener noreferrer" > {row.name} </a>;
    } },
  { title: 'Stars', name: 'stargazers_count' },
  { title: 'Watchers', name: 'watchers_count' },
  { title: 'Homepage',
    name: 'homepage',
    getCellValue: (row) => {
      return <a href={ row.homepage } target="_blank" rel="noopener noreferrer" > {row.homepage} </a>;
    } }
];

class Repository extends Component {
  
  search = (val) => {
    this.props.getRepository(val);
  };

  render () {
    return (
        <div className="component-repository"
          data-test="component-repository" >
            <Search
              search={ this.search }
            />
            <DataTable
              rows={ this.props.repos }
              columns={ columns }
              styles={ { height: '1000px' } }
            />
        </div>
    );
  }
}

Repository.path = 'repository';
Repository.navigationOptions = () => ({
  title: 'repository',
  linkName: 'repository'
});

Repository.propTypes = {
  repos: PropTypes.array.isRequired,
  getRepository: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  repos: state.repository.repos
});

const mapDispatchToProps = dispatch => ({
  getRepository: (val) => dispatch(getRepository(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repository);
