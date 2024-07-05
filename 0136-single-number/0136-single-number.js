/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const compareList = [];
    
    nums.forEach((num) => {
        const numIndex = compareList.indexOf(num);
        if (numIndex !== -1) {
            compareList.splice(numIndex, 1)
        } else {
            compareList.push(num)
        }
    })
    
    return compareList[0];
};