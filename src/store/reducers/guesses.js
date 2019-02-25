import { guessActionTypes } from '../actions/guesses';

const defaultState = {
  guesses: [], // { guess: PropTypes.string, mutch: PropTypes.number }
  correctGuess: false
}

const guesses = (state = defaultState, action) => {
    switch (action.type) {
      case guessActionTypes.CORRECT_GUESS:
        return {
          ...state,
          correctGuess: true
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