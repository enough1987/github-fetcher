  export const guessActionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    ADD_GUESS: 'ADD_GUESS',
    GET_GUESSES: 'GET_GUESSES'
  }

  export const correctGuess = () => ({
    type: guessActionTypes.CORRECT_GUESS
  });

  export const addGuess = (guess) => ({
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
