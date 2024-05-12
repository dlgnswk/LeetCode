/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[i];
    result[nums.length + i] = nums[i];
  }
  
  return result;
};