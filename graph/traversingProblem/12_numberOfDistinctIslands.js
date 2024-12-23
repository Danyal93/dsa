//@ts-check

class Solution {
  dfs(iN, jN, grid, visited, path, i0, j0) {
    visited[iN][jN] = true;
    path.push([iN - i0, jN - j0]);
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
        childIN < grid.length &&
        childJN >= 0 &&
        childJN < grid[0].length &&
        grid[childIN][childJN] === 1 &&
        !visited[childIN][childJN]
      ) {
        this.dfs(childIN, childJN, grid, visited, path, i0, j0);
      }
    }
  }

  /**
   * @param {number[][]} grid
   * @returns {number}
   */
  countDistinctIslands(grid) {
    let ans = 0;
    let m = grid.length;
    let n = grid[0].length;
    let visited = Array(m)
      .fill(undefined)
      .map(() => Array(n).fill(false));
    let distinctIslandSet = new Set();
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j] && grid[i][j] === 1) {
          let path = [];
          this.dfs(i, j, grid, visited, path, i, j);
          let pathString = "";
          path.forEach((e) => (pathString += JSON.stringify(e)));
          distinctIslandSet.add(pathString);
        }
      }
    }
    ans = distinctIslandSet.size;
    return ans;
  }
}
function numberOfDistinctIslands() {
  let obj = new Solution();
  let ans = obj.countDistinctIslands([
    [1, 0, 0, 0, 1, 0, 1, 1],
    [0, 1, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 1],
  ]);
}
numberOfDistinctIslands.run = () => {
  numberOfDistinctIslands();
};

module.exports = numberOfDistinctIslands;
