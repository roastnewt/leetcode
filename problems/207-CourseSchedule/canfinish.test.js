const canFinish = require('./canfinish.js');

const testCases = [
  [2, [[1,0]], true],
  [2, [[1,0],[0,1]], false]
]

describe('canFinish returns whether a class schedule is possible given a list of prerequisite classes and number of classes', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${canFinish(testCases[i][0], testCases[i][1])} to be ${testCases[i][2]}`, () => {
      expect(canFinish(testCases[i][0], testCases[i][1])).toStrictEqual(testCases[i][2]);
    });
  }
});