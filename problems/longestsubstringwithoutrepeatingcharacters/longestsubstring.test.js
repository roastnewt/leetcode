const lengthOfLongestSubstring = require('./longestsubstring.js');

const testCases = [
  ['abcabcbb', 3],
  ['bbbbb', 1],
  ['pwwkew', 3]
];

describe('lengthOfLongestSubstring should return the length of the longest substring without repeating characters', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${lengthOfLongestSubstring(testCases[i][0])} to be ${testCases[i][1]}`, () => {
      expect(lengthOfLongestSubstring(testCases[i][0])).toStrictEqual(testCases[i][1]);
    });
  };
});