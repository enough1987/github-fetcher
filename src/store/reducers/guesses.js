import { guessActionTypes } from '../actions/guesses';

const guesses = (state = {}, action) => {
    switch (action.type) {
      case guessActionTypes.CORRECT_GUESS:
        return {
          ...state,
          correctGuess: true
        }
      default:
        return state
    }
  }
  
  export default guesses