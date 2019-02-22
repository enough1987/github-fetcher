import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
        inputValue: ""
    };
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;

    this.setState({inputValue});
  }

  handleOnGuess = () => {
    console.log(' on guess ', this.props, this.state);
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

})
  
const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Input);
  