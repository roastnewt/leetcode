/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
17. Letter Combinations of a Phone Number
Medium

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]


Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
 *
 * @param {string} digits
 * @return {string[]}
 */

 const dictionary = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

var letterCombinations = function(digits) {

  if (digits.length === 0) {
      return [];
  }

  if (digits.length === 1) {
      return dictionary[digits];
  }

  let recursiveCase = letterCombinations(digits.slice(1));

  let result = [];

  let myTranslation = dictionary[digits[0]];

  for (let i = 0; i < myTranslation.length; i++) {

      for (let j = 0; j < recursiveCase.length; j++) {
          result.push(myTranslation[i] + recursiveCase[j]);
      }
  }

  return result;

};

module.exports = letterCombinations;