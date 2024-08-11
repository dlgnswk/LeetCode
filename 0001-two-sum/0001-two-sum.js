/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
  1. return 할 result 배열을 선언한다.
  2. nums의 길이 만큼 반복문을 순회시작하는데 nums를 numList에 복사한다.
  3. 받아온 numList에서 0번째 index부터 순회한다.
  4. numList에서 i번째 num을 target에서 뺀 값을 numList에서 찾는다
    없으면 return, 있으면 nums에서 뒤에서부터(lastIndexOf) num의 index를 찾는다.
  5. result 배열의 첫번째 index에 현재 반복문의 index를 담는다.
  6. result 배열의 두번째 index에 num의 index를 담는다.
    
*/

const twoSum = function(nums, target) {
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    const numList = [...nums];
    const [num] = numList.splice(i, 1);
    
    console.log(num, target, target-num)
    
    if (numList.indexOf(target - num) !== -1) {
      return [i, nums.lastIndexOf(target - num)];
    }
  }
};