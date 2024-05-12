/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  const len = nums.length;
  const result = new Array(len * 2);
  
  for (let i = 0; i < len; i++) {
    result[i] = nums[i];
    result[len + i] = nums[i];
  }
  
  return result;
};