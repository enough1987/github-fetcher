import { matchWords } from './helpers.js';

describe('helpers ', () => {
  test('matchWords should size of matches', () => {
    const result = matchWords('test', 'rest');

    expect(result)
      .toEqual(3);
  });
});
