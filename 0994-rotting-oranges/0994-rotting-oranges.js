/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let queue = [];
  let fresh = 0;
  let minutes = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      if (grid[r][c] === 1) fresh++;
    }
  }

  if (fresh === 0) return 0;

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (queue.length > 0 && fresh > 0) {
    let nextQueue = [];
    for (const [r, c] of queue) {
      for (const [dr, dc] of directions) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          fresh--;
          nextQueue.push([nr, nc]);
        }
      }
    }
    queue = nextQueue;
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
};