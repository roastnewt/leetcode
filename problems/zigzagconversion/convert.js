/*
https://leetcode.com/problems/zigzag-conversion/
6. Zigzag Conversion
Medium

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"


Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

 */

 var convert = function(s, numRows) {
  let constructedStrings = [];
  for (let j = 0; j < s.length;) {
      for (let i = 0; i < numRows; i++) {
      // loop forward
      if (constructedStrings[i]) {
          constructedStrings[i] += s[j] || '';
      } else {
          constructedStrings[i] = s[j] || '';
      }
      j++;
      }
      for (let i = numRows - 2; i > 0; i-- ) {
      // loop backwards
      if (constructedStrings[i]) {
          constructedStrings[i] += s[j] || '';
      } else {
          constructedStrings[i] = s[j] || '';
      }
      j++;
      }
  }
  return constructedStrings.join('');

};

module.exports = convert;