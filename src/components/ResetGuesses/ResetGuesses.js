import React, { Component } from 'react';
import { connect } from 'react-redux'

import { resetGuesses } from '../../store/actions/guesses';


export class ResetGuesses extends Component {

  handleOnReset = () => {
    this.props.resetGuesses();
  }

  render() {
    if( !this.props.show ) {
      return  (
          <div className="component-reset-guesses-wrapper"
            data-test="component-reset-guesses-wrapper" >   
          </div>
      ) 
    }

    return (
      <div className="component-reset-guesses-wrapper"
           data-test="component-reset-guesses-wrapper" >

          <button 
            data-test="reset-guesses-button"
            onClick={this.handleOnReset} > 
             Reset
          </button>

      </div>
    );
  }
}
  
const mapDispatchToProps = dispatch => ({
    resetGuesses: () => dispatch( resetGuesses() ),
})

export default connect(
    null,
    mapDispatchToProps
  )(ResetGuesses);
  