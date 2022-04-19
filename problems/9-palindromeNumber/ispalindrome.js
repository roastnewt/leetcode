
var isPalindrome = function(x) {
  x = x.toString();
  let center = (x.length - 1) / 2;
  let stack = [];
  for (let i = 0; i < x.length; i++) {
      if (i < center) {
          stack.push(x[i]);
      } else if (i > center) {
          if (stack.pop() != x[i]) {
              return false;
          }
      }
  }
  return true;
};

module.exports = isPalindrome;