import moxios from 'moxios';

import { } from './repository';
import { storeFactory } from '../../utils/testUtils';

describe('repository ', () => {
  const initialState = { };
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
});
