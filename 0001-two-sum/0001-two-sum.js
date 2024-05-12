/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const unknownNumber = target - nums[i];

    if (map.has(unknownNumber)) {
        return [map.get(unknownNumber), i];
    }
 
    map.set(nums[i], i);
  }
};
