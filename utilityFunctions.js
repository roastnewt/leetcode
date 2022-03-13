
// Linked List Definition

const ListNode = function (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
};

// Linked List Helper Functions

const convertArrayToLinkedList = function (array) {

  let resultList = null;
  let currentNode = null;

  for (let i = 0; i < array.length; i++) {
    if (resultList === null) {
      resultList = new ListNode(array[i]);
      currentNode = resultList;
    } else {
      currentNode.next = new ListNode(array[i]);
      currentNode = currentNode.next;
    }
  }

  return resultList;
};

const convertLinkedListToArray = function (linkedList) {

  let resultArray = [];

  for (let currentNode = linkedList; currentNode !== null; currentNode = currentNode.next) {
    resultArray.push(currentNode.val);
  }

  return resultArray;
};

module.exports = {ListNode, convertArrayToLinkedList, convertLinkedListToArray};

