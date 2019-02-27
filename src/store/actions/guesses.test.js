import { guessActionTypes, addGuess } from './guesses';
import { storeFactory } from '../../testUtils';

const initialState = { correctGuess: 'truly' };
const store = storeFactory(initialState);

it('addGuess return correct action', async () => {
    const guess = { guess: 'test' };
    await store.dispatch(addGuess(guess))
    
    console.log( store );
    const state = store.getState().guesses;

    expect(state)
        .toEqual({
                "isCorrectGuess": false,
                "correctGuess": "",
                "guesses": [
                  {
                   "guess": "test",
                   "match": 0,
                  }
                ] 
        });
});