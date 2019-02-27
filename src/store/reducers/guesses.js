import { guessActionTypes } from '../actions/guesses';

const defaultState = {
  guesses: [], // { guess: PropTypes.string, match: PropTypes.number }
  isCorrectGuess: false,
  correctGuess: ""
}

const guesses = (state = defaultState, action) => {
    switch (action.type) {
      case guessActionTypes.GET_CORRECT_GUESS:
        return {
          ...state,
          correctGuess: action.correctGuess
        }
      case guessActionTypes.SET_IS_CORRECT_GUESS:
        console.log(action);
        return {
          ...state,
          isCorrectGuess: action.isCorrectGuess
        }
      case guessActionTypes.ADD_GUESS:
        console.log(action);
        return {
          ...state,
          guesses: [...state.guesses, action.guess]
        }
      case guessActionTypes.GET_GUESSES:
        return state
      default:
        return state
    }
  }
  
  export default guesses