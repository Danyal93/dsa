//@ts-check

function dfs(iN, jN, grid, visited) {
  let m = grid.length;
  let n = grid[0].length;
  visited[iN][jN] = true;
  let direction = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];

  for (let i = 0; i < direction.length; i++) {
    let childIN = iN + direction[i].dx;
    let childJN = jN + direction[i].dy;

    if (
      childIN >= 0 &&
      childIN < m &&
      childJN >= 0 &&
      childJN < n &&
      grid[childIN][childJN] === 1 &&
      !visited[childIN][childJN]
    ) {
      dfs(childIN, childJN, grid, visited);
    }
  }
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
function numEnclaves(grid) {
  let ans = 0;
  let m = grid.length;
  let n = grid[0].length;
  let visited = Array(m)
    .fill(undefined)
    .map(() => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    if (!visited[i][0] && grid[i][0] === 1) {
      dfs(i, 0, grid, visited);
    }
    if (!visited[i][n - 1] && grid[i][n - 1] === 1) {
      dfs(i, n - 1, grid, visited);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[0][i] && grid[0][i] === 1) {
      dfs(0, i, grid, visited);
    }
    if (!visited[m - 1][i] && grid[m - 1][i] === 1) {
      dfs(m - 1, i, grid, visited);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && visited[i][j] === false) {
        ans++;
      }
    }
  }
  return ans;
}

numEnclaves.run = () => {
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
  ]);
};

module.exports = numEnclaves;
