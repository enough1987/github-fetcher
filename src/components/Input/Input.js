import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCorrectGuess, addGuess } from '../../store/actions/guesses';

export class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.props.getCorrectGuess();
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;

    this.setState({ inputValue });
  }

  handleOnGuess = () => {
    this.props.addGuess({ guess: this.state.inputValue });
  }

  render () {
    if (!this.props.show) {
      return (
          <div className="component-input-wrapper"
            data-test="component-input-wrapper" >
          </div>
      );
    }

    return (
        <div className="component-input-wrapper"
          data-test="component-input-wrapper" >

            <input type='text'
              data-test="component-input"
              onChange={ this.handleInputChange }
              value={ this.state.inputValue } />

            <button
              data-test="component-button"
              onClick={ this.handleOnGuess } >
             Guess
            </button>

        </div>
    );
  }
}

Input.propTypes = {
  show: PropTypes.bool.isRequired,
  addGuess: PropTypes.func.isRequired,
  getCorrectGuess: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  correctGuess: state.guesses.correctGuess
});

const mapDispatchToProps = dispatch => ({
  getCorrectGuess: () => dispatch(getCorrectGuess()),
  addGuess: (guess) => dispatch(addGuess(guess))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
