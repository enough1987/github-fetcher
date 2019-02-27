import { matchWords } from '../../helpers/index';
  
  export const guessActionTypes = {
    GET_CORRECT_GUESS: 'GET_CORRECT_GUESS',
    SET_IS_CORRECT_GUESS: 'SET_IS_CORRECT_GUESS',
    ADD_GUESS: 'ADD_GUESS',
    GET_GUESSES: 'GET_GUESSES'
  }


  export const setIsCorrectGuess = (isCorrectGuess) => ({
    type: guessActionTypes.SET_IS_CORRECT_GUESS,
    isCorrectGuess
  });

  export const getCorrectGuess = () => (dispatch, getState) => {
    const state = getState().guesses;
    setTimeout(() => {
      console.log(' state : ', state );
      dispatch(_getCorrectGuess('truly'));
    }, 1000 );
  };

  const _getCorrectGuess = (correctGuess) => ({
    type: guessActionTypes.GET_CORRECT_GUESS,
    correctGuess
  });

  export const addGuess = (guess) => (dispatch, getState) => {
    const correctGuess = getState().guesses.correctGuess;

    const match = matchWords( guess.guess, correctGuess );
    console.log( guess.guess === correctGuess, guess.guess , correctGuess );
    if ( guess.guess === correctGuess ) {
      dispatch(setIsCorrectGuess(true));
    }

    const _guess = { ...guess , match };
    dispatch(_addGuess(_guess));
  };

  export const _addGuess = (guess) => ({
    type: guessActionTypes.ADD_GUESS,
    guess
  });

  export const getGuesses = () => (dispatch, getState) => {
    const state = getState();
    console.log(' state : ', state );
    dispatch(_getGuesses());
  };

  const _getGuesses = (guess) => ({
    type: guessActionTypes.GET_GUESSES
  });
