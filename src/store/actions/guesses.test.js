import moxios from 'moxios';

import { getCorrectGuess, addGuess } from './guesses';
import { storeFactory } from '../../utils/testUtils';

describe('guesses ', () => {

  const initialState = { correctGuess: 'trul' };
  let store;

  beforeEach(() => {
    // import and pass your custom axios instance to this method
    moxios.install();

    moxios.stubRequest('data.json', {
      status: 200,
      response: {
        correctGuess: 'trul'
      }
    });

    store = storeFactory(initialState);

    moxios.wait(() => {});
  });

  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  it('giveUp change state', () => {

  });

  it('resetGuesses change state', () => {

  });

  it('setIsCorrectGuess change state', () => {

  });

  it('setIsCorrectGuess change state', () => {

  });

  it('getCorrectGuess change state', (done) => {

    store.dispatch(getCorrectGuess(true));

    moxios.wait(() => {
      const correctGuess = store.getState().guesses.correctGuess;
      
      expect(correctGuess)
        .toEqual('trul');
        done();
    });

  });

  it('addGuess change state', async () => {
    const guess = { guess: 'test' };
    await store.dispatch(addGuess(guess));

    const state = store.getState().guesses.guesses;

    expect(state)
      .toEqual([ // TODO - fix it
        {
          'guess': 'test',
          'match': 0
        }
      ]);
  });

  it('failedRequest change state', () => {

  });  

});
