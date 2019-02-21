import { guessActionTypes, correctGuess } from './guesses';

it('correctGuess return correct action', () => {
    const guess = { guess: 'test', mutch: 5 };
    const action = correctGuess(guess);

    expect(action)
        .toEqual({
            type: guessActionTypes.CORRECT_GUESS
        });
});