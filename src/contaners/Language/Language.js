/* eslint react/no-array-index-key: 0 */ // --> OFF
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLanguage } from '../../store/actions/language';

const Repo = ({ repo, index }) =>
  <tr>
    <td>{index + 1}</td>
    <td className="repo-name">{repo.name}</td>
    <td>{repo.stargazers_count} Stars</td>
  </tr>;

class Language extends Component {

  constructor (props) {
    super(props);

    this.props.getLanguage();
  }

  render () {
    return (
        <div className="component-language"
          data-test="component-language" >
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Repo Name</th>
                    <th>Stars Count</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.repos.map((repo, index) =>
                    <Repo repo={repo} index={index} key={repo.id} />,
                  )}
                </tbody>
            </table>
        </div>
    );
  }
}

Language.propTypes = {
  
};

const mapStateToProps = state => ({
  repos: state.language.repos
});

const mapDispatchToProps = dispatch => ({
  getLanguage: () => dispatch(getLanguage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language);
