const addTwoNumbers = require('./addtwonumbers.js');
const {convertArrayToLinkedList, convertLinkedListToArray} = require('../../utilityFunctions.js');

const testCases = [
  [[2,4,3], [5,6,4], [7,0,8]],
  [[0], [0], [0]],
  [[9,9,9,9,9,9,9], [9,9,9,9], [8,9,9,9,0,0,0,1]]
];

describe('addTwoNumbers should take two linked lists of digits in reverse order and return a linked list representing their sum', () => {
  for (let i = 0; i < testCases.length; i++) {
    test(`expect ${convertLinkedListToArray(addTwoNumbers(convertArrayToLinkedList(testCases[i][0]), convertArrayToLinkedList(testCases[i][1])))} to be ${testCases[i][2]}`, () => {
      expect(
        convertLinkedListToArray(
          addTwoNumbers(
            convertArrayToLinkedList(testCases[i][0]),
            convertArrayToLinkedList(testCases[i][1])
          )
        )
      ).toStrictEqual(testCases[i][2]);
    });
  }
});