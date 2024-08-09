/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

/*
1. 배열을 담을 빈 배열을 선언한다.
2. 들어온 배열의 갯수만큼 반복문을 통해 순회한다.
3. 빈 배열에 아이템을 담고 count 변수를 +1 한다.
4. count 변수가 size 와 같으면 else 를 통해 담는 배열을 빈 배열로 초기화 한 뒤 아이템을 담는다.
5. 리턴한다.
*/

var chunk = function(arr, size) {
    let unit = [];
    let count = 0;
    const result = [];
    
  if(arr.length > 0) {
  
    for (const item of arr) {
        
        if (size > count) {
            unit.push(item);
          
            count++;
        } else {
            result.push(unit);
            
            unit = [];
            unit.push(item);
            
            count = 1;
        }
    }
  result.push(unit);
  
  return result;
    }
  return [];
};
