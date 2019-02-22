import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import Congrats from './Congrats';
import GuessList from './GuessList';
import correctGuess from './store/actions/guesses';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    })
  }

  decrement = (a, b) => {
    this.setState((state) => {
      if(!state.counter) {
        return {};
      }
      return {
        counter: state.counter - 1
      };
    })
  }

  render() {

    return (
      <div className="App">
       
        <div> 
          <buttom data-test="btn-increment" 
            onClick={ this.increment }>
            increment
          </buttom>  
          <buttom data-test="btn-decrement" 
            onClick={ this.decrement }>
            decrement
          </buttom>  
          <h1> current counter is { this.state.counter } </h1>
        </div>

        <Congrats show={ false } />
        <GuessList guesses={ [] } />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses
})

const mapDispatchToProps = dispatch => ({
  correctGuess: () => dispatch(correctGuess())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
