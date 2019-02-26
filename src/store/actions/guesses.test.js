import { guessActionTypes, addGuess } from './guesses';

it('addGuess return correct action', () => {
    const guess = { guess: 'test', mutch: 5 };
    const action = addGuess(guess);

    expect(action)
        .toEqual({
            type: guessActionTypes.ADD_GUESS,
            guess
        });
});