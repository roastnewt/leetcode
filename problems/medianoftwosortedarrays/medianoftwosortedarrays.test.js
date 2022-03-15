const findMedianSortedArrays = require('./medianoftwosortedarrays.js');

const testCases = [
  [[1,3], [2], 2],
  [[1,2], [3,4], 2.5],
  [[5,6,7], [5,6,7], 6]
]

describe('findMedian should find the median element in two sorted arrays', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${findMedianSortedArrays(testCases[i][0], testCases[i][1])} to be ${testCases[i][2]}`, () => {
      expect(findMedianSortedArrays(testCases[i][0], testCases[i][1])).toStrictEqual(testCases[i][2]);
    });
  }
});