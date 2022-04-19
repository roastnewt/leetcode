var longestPalindrome = function(s) {

  if (s.length === 1) return s;

  let longestSolution = ''
  // check for palindromes by starting at a letter, then 'building' a palindrome
  // around it adding one character left and right.
  // offset starts between characters for palindromes with no center character.
  let checkCenter = (s, offset = 0) => {
      for (let i = 0; i < s.length; i++) {
          let start = i;
          let end = i + offset;
          let count = 1 + offset;
          while (start > -1 && end < s.length && s[start] === s[end]) {
              if (longestSolution.length < count) {
                  longestSolution = s.substring(start,end+1);
              }
              start--;
              end++;
              count = count + 2;
          }
      }
  }

  checkCenter(s);
  checkCenter(s, 1);

  return longestSolution;
};

module.exports = longestPalindrome;