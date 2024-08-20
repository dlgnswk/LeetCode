/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, target) {
  const current = image[sr][sc];
  findCross(image, sr, sc, current, target);
  
  return image;
};
  
function findCross(image, x, y, current, target) {
  if (x < 0 || y < 0 ||
      x >= image.length || y >= image[x].length ||
      image[x][y] === target || image[x][y] !== current ||
      image[x][y] === target) {
    return;
  } 
  image[x][y] = target;

  findCross(image, x - 1, y, current, target);
  findCross(image, x, y - 1, current, target);
  findCross(image, x + 1, y, current, target);
  findCross(image, x, y + 1, current, target);
}