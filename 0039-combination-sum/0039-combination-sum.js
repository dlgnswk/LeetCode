/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  const temp = [];
  
  function dfs(sum, startIndex) {
    if (sum > target) return;
    
    if (sum === target) {
      result.push(temp.slice());
    } else {
      for (let i = startIndex; i < candidates.length; i++) {
        temp.push(candidates[i]);
        dfs(sum + candidates[i], i);
        temp.pop();
      }
    }
  }
  
  dfs(0, 0);
  
  return result;
};