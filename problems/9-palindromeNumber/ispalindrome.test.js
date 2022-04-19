const isPalindrome = require('./ispalindrome.js');

const testCases = [
  [121, true],
  [-121, false],
  [10, false]
]

describe('isPalindrome should return true when the provided number is a palindrome', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${isPalindrome(testCases[i][0])} to be ${testCases[i][1]}`, () => {
      expect(isPalindrome(testCases[i][0])).toStrictEqual(testCases[i][1]);
    });
  }
});