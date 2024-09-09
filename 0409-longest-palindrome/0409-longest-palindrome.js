/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const origin = [...s];
  const result = [];
  
  for (let i = 0; i < s.length; i++) {
    const char = origin.shift();
    const index = origin.indexOf(char);
    
    if (index !== -1) {
      origin.splice(index, 1);
    } else {
      if (char) result.push(char);
    }
  }
  
  return result.length <= 1 ? s.length : s.length - result.length + 1;
};