import React, { Component } from 'react';
import { connect } from 'react-redux'

import Congrats from '../../components/Congrats/Congrats';
import GuessList from '../../components/GuessList/GuessList';
import Input from '../../components/Input/Input';
import ResetGuesses from '../../components/ResetGuesses/ResetGuesses';
import GiveUp from '../../components/GiveUp/GiveUp';
import { getGuesses } from '../../store/actions/guesses';

export class GuessWord extends Component {


  constructor(props) {
    super(props);
    this.props.getGuesses();
  }

  render() {

    const giveUp = this.props.giveUp ? 
      <div> Correct world is { this.props.correctGuess } </div> 
      : null;

    return ( 
        <div className="guess-word" 
            data-test="guess-word" > 
          
            { giveUp }
            <Congrats show={ this.props.isCorrectGuess } />
            <Input show={ !this.props.isCorrectGuess } />
            <GuessList guesses={ this.props.guesses } />
            <ResetGuesses show={ !this.props.isCorrectGuess } />
            <GiveUp show={ !this.props.isCorrectGuess } />

        </div>
    );
  }
}

GuessWord.path = "guess-world";
GuessWord.navigationOptions = () => ({
  title: "Guess world",
  linkName: "Guess world"
});

const mapStateToProps = state => ({
    guesses: state.guesses.guesses,
    correctGuess: state.guesses.correctGuess, 
    isCorrectGuess: state.guesses.isCorrectGuess,
    giveUp: state.guesses.giveUp
  })
  
const mapDispatchToProps = dispatch => ({
    getGuesses: () => dispatch(getGuesses())
  })
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GuessWord);
