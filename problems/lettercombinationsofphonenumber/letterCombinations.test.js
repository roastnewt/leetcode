const letterCombinations = require('./letterCombinations.js');

const testCases = [
  ['23', ['ad','ae','af','bd','be','bf','cd','ce','cf']],
  ['', []],
  ['2', ['a', 'b', 'c']]
]

describe('letterCombinations should return an array of letter combinations represented by input numbers', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${letterCombinations(testCases[i][0])} to be ${testCases[i][1]}`, () => {
      expect(letterCombinations(testCases[i][0])).toStrictEqual(testCases[i][1]);
    });
  }
});