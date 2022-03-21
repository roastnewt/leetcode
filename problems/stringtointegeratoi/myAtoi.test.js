const myAtoi = require('./myAtoi.js');

const testCases = [
  ['42', 42],
  ['   -42', -42],
  ['4193 with words', 4193],
  ['   +0   123', 0],
  ['words with 32', 0],
  ['-91283472332', -2147483648]
]

describe('myAtoi should return an integer represented by the input string', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${myAtoi(testCases[i][0])} to be ${testCases[i][1]}`, () => {
      expect(myAtoi(testCases[i][0])).toStrictEqual(testCases[i][1]);
    });
  }
});