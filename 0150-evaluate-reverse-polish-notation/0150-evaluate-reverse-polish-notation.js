/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  const result = [];
  
  while (tokens.length !== 0){
    const current = tokens.shift();
    
    if (operators[current]) {
      const post = result.pop();
      const pre = result.pop();
      result.push(operators[current](pre, post));
    } else {
      result.push(Number(current));
    }
  }
  
  return result[0];
};