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
    console.log(' on guess ');
  }

  render() {

    return (
      <div className="component-input-wrapper"
        data-test="component-input-wrapper" >
          
          <input type='text' 
            data-test="component-input"
            onChange={this.handleInputChange}
            value={this.props.inputValue } />

          <botton 
            data-test="component-botton"
            onClick={this.handleOnGuess} >  Guess </botton>

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
  