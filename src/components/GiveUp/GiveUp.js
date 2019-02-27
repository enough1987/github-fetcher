import React, { Component } from 'react';
import { connect } from 'react-redux'

import { giveUp } from '../../store/actions/guesses';


export class GiveUp extends Component {

  handleOnGiveUp = () => {
    this.props.giveUp();
  }

  render() {
    if( !this.props.show ) {
      return  (
          <div className="component-give-up-wrapper"
            data-test="component-give-up-wrapper" >   
          </div>
      ) 
    }

    return (
      <div className="component-give-up-wrapper"
           data-test="component-give-up-wrapper" >

          <button 
            data-test="give-up-button"
            onClick={this.handleOnGiveUp} > 
             GiveUp
          </button>

      </div>
    );
  }
}
  
const mapDispatchToProps = dispatch => ({
    giveUp: () => dispatch( giveUp() ),
})

export default connect(
    null,
    mapDispatchToProps
  )(GiveUp);
  