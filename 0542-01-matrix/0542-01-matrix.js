/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const queue = [];
    
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }
  
  direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  while(queue.length) {
    const [x, y] = queue.shift();
    
    for (const [dirX, dirY] of direction) {
      const findX = x + dirX;
      const findY = y + dirY;
      
      if (findX >= 0 && findX < mat.length &&
          findY >= 0 && findY < mat[0].length &&
          mat[findX][findY] > mat[x][y] + 1){
        mat[findX][findY] = mat[x][y] + 1;
        queue.push([findX, findY]);
      }
    }
  }
  
  return mat;
};