/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const missingNumber = target - nums[i];

    if (nums.includes(missingNumber) && nums.indexOf(missingNumber) !== nums.lastIndexOf(nums[i])) {
      return [i, nums.indexOf(missingNumber, i + 1)];
    }
  }
};
