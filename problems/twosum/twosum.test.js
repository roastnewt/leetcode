const twoSum = require('./twosum.js');

const testCases = [
  [[2,7,11,15], 9, [0,1]],
  [[3,2,4], 6, [1,2]],
  [[3,3], 6, [0,1]]
]

describe('twoSum should find the addends in the array that result in the second param', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${twoSum(testCases[i][0], testCases[i][1])} to be ${testCases[i][2]}`, () => {
      expect(twoSum(testCases[i][0], testCases[i][1])).toStrictEqual(testCases[i][2]);
    });
  }
});