const searchRange = require('./searchRange.js');

const testCases = [
  [[5,7,7,8,8,10], 8, [3,4]],
  [[5,7,7,8,8,10], 6, [-1,-1]],
  [[], 0, [-1,-1]]
]

describe('searchRange should return the first and last positions of target in sorted array', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${searchRange(testCases[i][0], testCases[i][1])} to be ${testCases[i][2]}`, () => {
      expect(searchRange(testCases[i][0], testCases[i][1])).toStrictEqual(testCases[i][2]);
    });
  }
});