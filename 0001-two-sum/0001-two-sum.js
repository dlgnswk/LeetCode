/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    const numList = [...nums];
    const [num] = numList.splice(i, 1);
    
    if (numList.indexOf(target - num) === -1) {
      continue;
    } else {
      return [i, nums.lastIndexOf(target - num)];
    }
  }
};