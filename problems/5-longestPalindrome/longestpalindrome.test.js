const longestPalindrome = require('./longestpalindrome.js');

const testCases = [
  ['babcd', 'bab'],
  ['cbbd', 'bb']
]

describe('longestPalindrome should return the longest palindromic substring of the input string', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${longestPalindrome(testCases[i][0])} to be ${testCases[i][1]}`, () => {
      expect(longestPalindrome(testCases[i][0])).toStrictEqual(testCases[i][1]);
    });
  }
});