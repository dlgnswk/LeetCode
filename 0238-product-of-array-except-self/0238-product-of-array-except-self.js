/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length;
  const result = new Array(len).fill(1);
  
  let left = 1;
  let right = 1;
  
  for (let i = 0; i < len; i++) {
    result[i] *= left;
    left *= nums[i];
  }
  
  for (let i = len - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  
  return result;
};