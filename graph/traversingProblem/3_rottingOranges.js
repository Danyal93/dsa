//@ts-check

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  let n = grid.length;
  let ans = 0;
  let queue = [];
  /** @type {boolean[][]} */
  let visited = Array(n)
    .fill(undefined)
    .map((v, i) => Array(grid[i].length).fill(false));
  let freshOrangeCount = 0;
  let direction = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const node = grid[i][j];
      if (node === 2) {
        visited[i][j] = true;
        queue.push({ iN: i, jN: j, time: 0 });
      } else if (node === 1) {
        freshOrangeCount++;
      }
    }
  }
  while (queue.length) {
    let { iN = 0, jN = 0, time = 0 } = queue.shift() ?? {};
    for (let i = 0; i < direction.length; i++) {
      let childIN = iN + direction[i].dx;
      let childJN = jN + direction[i].dy;
      let childTime = time + 1;

      if (
        childIN >= 0 &&
        childIN < n &&
        childJN >= 0 &&
        childJN < grid[iN].length &&
        grid[childIN][childJN] === 1 &&
        !visited[childIN][childJN]
      ) {
        freshOrangeCount--;
        ans = Math.max(ans, childTime);
        visited[childIN][childJN] = true;
        queue.push({ iN: childIN, jN: childJN, time: childTime });
      }
    }
  }
  if (freshOrangeCount) return -1;
  return ans;
}
orangesRotting.run = () => {
  orangesRotting([[2, 1, 0, 2]]);
  //   orangesRotting([[0, 1]]);
  //   orangesRotting([
  //     [2, 1, 1],
  //     [1, 1, 0],
  //     [0, 1, 1],
  //   ]);
};
module.exports = orangesRotting;
