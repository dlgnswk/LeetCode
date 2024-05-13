/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  
  const stringX = x.toString();
  for (const item of stringX) {
    if (stringX.indexOf(item) + stringX.lastIndexOf(item) + 1 !== stringX.length) {
      return false;
    }
  }
  
  return true;
};