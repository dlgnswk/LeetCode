/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = 0;

  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[0].length; c++) {
      if(grid[r][c] === '1') {
        islands++;
        dfs(r, c);
      }
    }
  }

  function dfs(r, c) {
    if(r < 0 || r >= grid.length || grid[r][c] !== '1') return;
    grid[r][c] = '0';

    dfs(r+1, c); // down
    dfs(r-1, c); // up
    dfs(r, c+1); // right
    dfs(r, c-1); // left
  }
  
  return islands;
};