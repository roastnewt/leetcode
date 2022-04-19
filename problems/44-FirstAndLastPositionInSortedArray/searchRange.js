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