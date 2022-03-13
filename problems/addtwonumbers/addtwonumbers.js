/*
https://leetcode.com/problems/add-two-numbers/

2. Add Two Numbers
Medium
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

const { ListNode } = require('../../utilityFunctions.js');

var recursionHelper = function(l1, l2, rem, result, current) {
  let nextRem = 0;
  let digitsAdded = null;
  if (l1 != null && l2 != null) {
      digitsAdded = l1.val + l2.val + rem;
  } else if (l1 != null) {
      digitsAdded = l1.val + rem;
  } else if (l2 != null) {
      digitsAdded = l2.val + rem;
  } else {
      if (rem === 1) {
          current.next = new ListNode(1, null);
      }
      return result;
  }
  if (digitsAdded >= 10) {
      nextRem = 1;
      digitsAdded -= 10;
  }
  if (result === null) {
      result = new ListNode(digitsAdded, null);
      return recursionHelper(l1.next, l2.next, nextRem, result, result);
  } else {
      current.next = new ListNode(digitsAdded, null);
      if (l1 === null) {
          return recursionHelper(null, l2.next, nextRem, result, current.next);
      } else if (l2 === null) {
          return recursionHelper(l1.next, null, nextRem, result, current.next);
      } else {
          return recursionHelper(l1.next, l2.next, nextRem, result, current.next);
      }
  }
}

var addTwoNumbers = function(l1, l2) {
  var finalResult = recursionHelper(l1, l2, 0, null);
  return finalResult;
};

module.exports = addTwoNumbers;