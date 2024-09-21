/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length < t.length) return "";
  
  const freq = {};
  for (let char of t) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  let left = 0;
  let right = 0;
  let required = Object.keys(freq).length;
  let formed = 0;
  let windowCounts = {};
  let minLength = Infinity;
  let result = "";

 while (right < s.length) {
    let char = s[right];
    windowCounts[char] = (windowCounts[char] || 0) + 1;

    if (freq[char] && windowCounts[char] === freq[char]) {
      formed++;
    }

    while (left <= right && formed === required) {
      char = s[left];

      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        result = s.slice(left, right + 1);
      }

      windowCounts[char]--;
      if (freq[char] && windowCounts[char] < freq[char]) {
        formed--;
      }

      left++;
    }

    right++;
  }

  return result;
};