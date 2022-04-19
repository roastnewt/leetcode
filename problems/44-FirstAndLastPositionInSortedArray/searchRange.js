// Normally O(log(n) + C), but worst case O(n)

var searchRange = function(nums, target) {

  let start = 0;
  let end = nums.length;
  let current;
  while (true) {
      current = start + Math.floor((end - start) / 2);
      if (nums[current] === target) {
          break;
      } else if (start >= end) {
          return [-1, -1];
      } else if (nums[current] < target) {
          start = current + 1;
      } else {
          end = current - 1;
      }
  }

  for (var begin = current; nums[current] === nums[begin]; begin--);
  for (var last = current; nums[current] === nums[last]; last++);

  return [begin+1, last-1];

};

module.exports = searchRange;



// Another solution - two binary searches.  Always O(log(n)).  May be slower in practice
// const searchRange = function(nums, target) {
//     let leftMost = -1;
//     let rightMost = -1;

//     let l = 0;
//     let r = nums.length - 1;
//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);

//         if (nums[mid] === target) {
//             leftMost = mid;
//             r = mid - 1
//         } else if (nums[mid] > target) {
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }

//     if (leftMost === -1) return [-1, -1];

//     // dont need to reset left
//     r = nums.length - 1

//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);

//         if (nums[mid] === target) {
//             rightMost = mid;
//             l = mid + 1
//         } else if (nums[mid] > target) {
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }

//     return [leftMost, rightMost]
// };