/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 1) {
    return true;
  } else {
    const rex = /^[a-z0-9]*$/;
    const filteredString = [...s.toLowerCase()].filter((char) => {
      if (char !== ' '&& rex.test(char)){
        return char;
      }
    });
    const reverseFilteredString = [...filteredString].reverse();
  
    console.log(filteredString.join(''))
    console.log(reverseFilteredString.join(''))
    
    for (let i = 0; i < filteredString.length; i++) {
      if (filteredString[i] !== reverseFilteredString[i]) {
        return false;
      }
    }
  }
  
  return true;
};