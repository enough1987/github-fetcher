import axios from 'axios';
import moxios from 'moxios';

import { getCorrectGuess, addGuess } from './guesses';
import { storeFactory } from '../../utils/testUtils';

const initialState = { correctGuess: 'truly' };
const store = storeFactory(initialState);

beforeEach(function () {
  // import and pass your custom axios instance to this method
  moxios.install();
});

afterEach(function () {
  // import and pass your custom axios instance to this method
  moxios.uninstall();
});

it('addGuess add guess to guesses', async () => {
  const guess = { guess: 'test' };
  await store.dispatch(addGuess(guess));

  const state = store.getState().guesses.guesses;

  expect(state)
    .toEqual([
      {
        'guess': 'test',
        'match': 0
      }
    ]);
});

it('getCorrectGuess get correct guess', async () => {
  moxios.stubRequest('data.json', {
    status: 200,
    response: {
      correctGuess: 'truly'
    }
  });

  await store.dispatch(getCorrectGuess(true));

  moxios.wait(() => {
    const correctGuess = store.getState().guesses.correctGuess;

    expect(correctGuess)
      .toEqual('truly');
  });
});
