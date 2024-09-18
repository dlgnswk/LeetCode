/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  
  function dfs(current, list) {
    if (current.length === nums.length) {
      result.push([...current]);
      
      return;
    }
    
    for (let i = 0; i < list.length; i++) {
      const newCurrent = [...current, list[i]];
      const newList = list.slice(0, i).concat(list.slice(i + 1));
      
      dfs(newCurrent, newList);
    }
  }
  
  dfs([], nums);
  
  return result;
};