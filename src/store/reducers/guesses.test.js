import guesses from './guesses';
import { guessActionTypes } from '../actions/guesses';

describe('guesses ', () => {

  it('guesses return new state if there are action type mutch GIVE_UP', () => {

  });

  it('guesses return new state if there are action type mutch RESET_GUESSES', () => {

  });

  it('guesses return new state if there are action type mutch GET_CORRECT_GUESS', () => {
    const result = guesses({ test: 'test' }, { type: guessActionTypes.GET_CORRECT_GUESS, correctGuess: 'test' });
    expect(result)
      .toEqual({
        test: 'test',
        correctGuess: 'test'
      });
  });

  it('guesses return new state if there are action type mutch SET_IS_CORRECT_GUESS', () => {

  });

  it('guesses return new state if there are action type mutch ADD_GUESS', () => {

  });

  it('guesses return new state if there are action type mutch REQUEST_FAILED', () => {

  });

  it('guesses return default state if there are no action', () => {
    const result = guesses({ test: 'test' }, { });

    expect(result)
      .toEqual({
        test: 'test'
      });
  });

});
