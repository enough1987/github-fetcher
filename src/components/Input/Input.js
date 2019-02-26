import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getCorrectGuess, setIsCorrectGuess, addGuess } from '../../store/actions/guesses';
import { matchWords } from '../../helpers/index';

export class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
        inputValue: ""
    };
    this.props.getCorrectGuess();
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;

    this.setState({inputValue});
  }

  handleOnGuess = () => {
    const match = matchWords( this.state.inputValue, this.props.correctGuess );
    if ( this.state.inputValue.length === this.props.correctGuess.length 
      && match === this.props.correctGuess.length ) {
       this.props.setIsCorrectGuess(true);
    }
    this.props.addGuess({ guess: this.state.inputValue, match });
  }

  render() {

    if( !this.props.show ) {
        return  (
            <div className="component-input-wrapper"
                data-test="component-input-wrapper" >   
            </div>
        ) 
    }

    return (
      <div className="component-input-wrapper"
        data-test="component-input-wrapper" >
          
          <input type='text' 
            data-test="component-input"
            onChange={this.handleInputChange}
            value={this.props.inputValue } />

          <button 
            data-test="component-button"
            onClick={this.handleOnGuess} > 
             Guess 
          </button>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  correctGuess: state.guesses.correctGuess
})
  
const mapDispatchToProps = dispatch => ({
  getCorrectGuess: () => dispatch( getCorrectGuess() ),
  setIsCorrectGuess: (isCorrectGuess) => dispatch( setIsCorrectGuess(isCorrectGuess) ),
  addGuess: (guess) => dispatch( addGuess(guess) )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Input);
  