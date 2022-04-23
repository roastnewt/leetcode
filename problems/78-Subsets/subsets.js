
var subsets = function(nums) {

  // [1,2,3,4]

  // []
  // [[], [1]]
  // [[2], [1, 2], [], [1]]
  // [[2,3], [1, 2, 3], [3], [1,3], [2], [1, 2], [], [1]]

  let result = [[]];

  let deepCopy = (arrayOfArrays) => {
      let copy = [];
      for (let i = 0; i < arrayOfArrays.length; i++) {
          copy.push(arrayOfArrays[i].slice());
      }
      return copy;
  }


  for (let i = 0; i < nums.length; i++) {
      let previousResult = deepCopy(result);
      for (let j = 0; j < result.length; j++) {
          previousResult[j].push(nums[i]);
      }
      result = previousResult.concat(result); // [[], []]
  }

  return result;

}

module.exports = subsets;