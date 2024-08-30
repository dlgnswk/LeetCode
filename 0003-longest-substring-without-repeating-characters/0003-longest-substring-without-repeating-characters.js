/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let start = 0;
  let maxLength = 0;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if (map.has(char) && map.get(char) >= start) {
      start = map.get(char) + 1;
    }
    
    map.set(char, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  
  return maxLength;
};
