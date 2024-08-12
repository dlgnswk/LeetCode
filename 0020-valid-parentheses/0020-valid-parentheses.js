/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const vaildBracket = {'(': ')', '{': '}', '[': ']'};
  const compareBracket = [];
  
  if (s.length % 2 !== 0) {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (Object.keys(vaildBracket).includes(s[i])) {
        compareBracket.push(s[i]);
      } else {
        if (compareBracket[compareBracket.length - 1] === Object.keys(vaildBracket).find((barcket) => vaildBracket[barcket] === s[i])) {
          compareBracket.pop();
        } else {
          return false;
        }
      }
    }

    return compareBracket.length === 0 ? true : false; 
  }
};