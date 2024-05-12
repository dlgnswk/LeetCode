/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if(nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) !== nums.lastIndexOf(nums[i])) {
      console.log(nums[i])
      return [i, nums.indexOf(target - nums[i], i + 1)]
    }
  }
};
