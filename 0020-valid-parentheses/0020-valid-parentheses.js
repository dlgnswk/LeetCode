/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const openBrackets = {'(': ')', '{': '}', '[': ']'};
  const memo = [];
  
  for (const item of s) {
    if (Object.keys(openBrackets).includes(item)) {
      memo.push(openBrackets[item]);
    } else {
      if (item !== memo.pop()) {
        return false;
      }
    }
  }
  return memo.length === 0;
};