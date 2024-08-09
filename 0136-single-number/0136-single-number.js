/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const compareList = []; // 선언 및 초기화
    
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