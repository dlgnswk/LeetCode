/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let result = 0;
  
  for (let i = 1; i < s.length; i++) {
    result += Math.abs(s[i - 1].charCodeAt() - s[i].charCodeAt());
  }
  
  return result;
};