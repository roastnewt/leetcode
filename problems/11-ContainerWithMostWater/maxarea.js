var maxArea = function(height) {

  let water = (a,b) => (b-a)*Math.min(height[a],height[b]);
  let a = 0;
  let b = height.length - 1;
  let max = 0;

  while (a < b) {
      if (water(a,b) > max) max = water(a,b);
      if (height[a] < height[b]) {
          a++;
      } else {
          b--;
      }
  }

  return max;

}

module.exports = maxArea;