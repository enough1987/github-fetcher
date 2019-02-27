import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import Congrats from '../../components/Congrats/Congrats';
import GuessList from '../../components/GuessList/GuessList';
import Input from '../../components/Input/Input';
import Counter from '../../components/Counter/Counter';
import {getGuesses} from '../../store/actions/guesses';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.props.getGuesses();
  }

  render() {
    return (
      <div data-test="App" 
        className="App">
       
        <Counter />

        <Congrats show={ this.props.isCorrectGuess } />
        <Input show={ !this.props.isCorrectGuess } />
        <GuessList guesses={ this.props.guesses } />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses.guesses,
  isCorrectGuess: state.guesses.isCorrectGuess
})

const mapDispatchToProps = dispatch => ({
  getGuesses: () => dispatch(getGuesses())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
