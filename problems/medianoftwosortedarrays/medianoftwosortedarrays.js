/*
https://leetcode.com/problems/median-of-two-sorted-arrays/
4. Median of Two Sorted Arrays
Hard

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).


Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

//
// This solution avoids combining the arrays first, and then finding the middle by iterating through both arrays as each
// one has the smallest value.
// But it is still O((n+m)/2),
// Leetcode says best solution is O(log(n+m))
//
// However, my leetcode results are:
// Runtime: 92 ms, faster than 97.95% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 46.7 MB, less than 64.59% of JavaScript online submissions for Median of Two Sorted Arrays.
//


var findMedianSortedArrays = function(nums1, nums2) {
  let rawTotalLength = nums1.length + nums2.length;
  let totalLength = rawTotalLength % 2 ? rawTotalLength : rawTotalLength+1;
  let currentIndex1 = 0;
  let currentIndex2 = 0;
  let currentVal = null;
  let prevVal = null;

  for (let i = 0; i < totalLength / 2; i++) {
      prevVal = currentVal;
      if (nums1[currentIndex1] < nums2[currentIndex2]) {
          if (currentIndex1 < nums1.length) {
              currentVal = nums1[currentIndex1];
              currentIndex1++;
          } else {
              currentVal = nums2[currentIndex2];
              currentIndex2++;
          }
      } else {
          if (currentIndex2 < nums2.length) {
              currentVal = nums2[currentIndex2];
              currentIndex2++;
          } else {
              currentVal = nums1[currentIndex1];
              currentIndex1++;
          }
      }
  }

  if (rawTotalLength != totalLength) {
      return (currentVal + prevVal) / 2;
  } else {
      return currentVal;
  }
};

module.exports = findMedianSortedArrays;