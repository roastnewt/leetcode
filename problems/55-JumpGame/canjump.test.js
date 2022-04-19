const canJump = require('./canjump.js');

const testCases = [
  [[2,3,1,1,4], true],
  [[3,2,1,0,4], false]
]

describe('canJump returns a boolean if there is a path to the end', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${canJump(testCases[i][0])} to be ${testCases[i][1]}`, () => {
      expect(canJump(testCases[i][0])).toStrictEqual(testCases[i][1]);
    });
  }
});