import { guessActionTypes } from '../actions/guesses';

const defaultState = {
  guesses: [], // { guess: PropTypes.string, match: PropTypes.number }
  isCorrectGuess: false,
  giveUp: false,
  correctGuess: ''
};

const guesses = (state = defaultState, action) => {
  if ( action.type == guessActionTypes.GET_CORRECT_GUESS ) {
    console.log( state, action );
  }
  switch (action.type) {
    case guessActionTypes.GIVE_UP:
      return {
        ...state,
        giveUp: true
      };
    case guessActionTypes.RESET_GUESSES:
      return {
        ...state,
        guesses: [],
        isCorrectGuess: false,
        giveUp: false
      };
    case guessActionTypes.GET_CORRECT_GUESS:
      return {
        ...state,
        correctGuess: action.correctGuess
      };
    case guessActionTypes.SET_IS_CORRECT_GUESS:
      return {
        ...state,
        isCorrectGuess: action.isCorrectGuess
      };
    case guessActionTypes.ADD_GUESS:
      return {
        ...state,
        guesses: [ ...state.guesses, action.guess ]
      };
    case guessActionTypes.REQUEST_FAILED:
      return {
        ...state,
        failedrequests: action.failedrequests
      };
    default:
      return state;
  }
};

export default guesses;
