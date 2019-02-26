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
    const state = getState();
    setTimeout(() => {
      console.log(' state : ', state );
      dispatch(_getCorrectGuess('truly'));
    }, 1000 );
  };

  const _getCorrectGuess = (correctGuess) => ({
    type: guessActionTypes.GET_CORRECT_GUESS,
    correctGuess
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
