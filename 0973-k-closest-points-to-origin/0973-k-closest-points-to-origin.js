/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  function euclidean([a, b]) {
    return (a ** 2) + (b ** 2);
  }

  const pointList = points.map(point => [point, euclidean(point)]);
  
  pointList.sort((a, b) => a[1] - b[1]);
  
  const result = pointList.slice(0, k).map(item => item[0]);
  
  return result;
};