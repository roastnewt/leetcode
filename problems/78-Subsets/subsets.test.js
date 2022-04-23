const subsets = require('./subsets.js');

const testCases = [
  [[1,2,3], [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]],
  [[1,2], [[],[1],[1,2],[2]]]
]

describe('subset returns an array of subset arrays representing all combinations of the original array', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${subsets(testCases[i][0])} to be ${testCases[i][1]}`, () => {
      expect(subsets(testCases[i][0]).sort()).toStrictEqual(testCases[i][1].sort());
    });
  }
});