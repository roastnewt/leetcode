const maxArea = require('./maxarea.js');

const testCases = [
  [[1,8,6,2,5,4,8,3,7], 49],
  [[1,1], 1]
]

describe('maxArea should return the maxium area between two posts in an array of heights, separated by their position in the array', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${maxArea(testCases[i][0])} to be ${testCases[i][1]}`, () => {
      expect(maxArea(testCases[i][0])).toStrictEqual(testCases[i][1]);
    });
  }
});