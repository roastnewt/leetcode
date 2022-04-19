const convert = require('./convert.js');

const testCases = [
  ['PAYPALISHIRING', 3, 'PAHNAPLSIIGYIR'],
  ['PAYPALISHIRING', 4, 'PINALSIGYAHRPI'],
  ['A', 1, 'A']
]

describe('convert should take a string and a number of rows and return a new string in the described "zigzag" pattern', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${convert(testCases[i][0], testCases[i][1])} to be ${testCases[i][2]}`, () => {
      expect(convert(testCases[i][0], testCases[i][1])).toStrictEqual(testCases[i][2]);
    });
  }
});