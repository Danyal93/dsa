//@ts-check

/**
 * @param {number[][]} grid
 * @return {number}
 */
function shortestPathBinaryMatrix(grid) {
  let n = grid.length;
  let queue = [];
  let distance = Array(n)
    .fill(undefined)
    .map(() => Array(n).fill(1e9));
  if (grid[0][0] !== 0) return -1;
  distance[0][0] = 1;
  queue.push([0, 0, 1]);

  let direction = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 1 },
    { dx: 1, dy: -1 },
    { dx: -1, dy: 1 },
    { dx: -1, dy: -1 },
  ];
  while (queue.length) {
    let [iN, jN, weight] = queue.shift() ?? [];
    for (let i = 0; i < direction.length; i++) {
      let childIn = direction[i].dx + iN;
      let childJn = direction[i].dy + jN;
      let newChildWeight = weight + 1;
      if (
        childIn >= 0 &&
        childJn >= 0 &&
        childIn < n &&
        childJn < n &&
        grid[childIn][childJn] === 0 &&
        distance[childIn][childJn] > newChildWeight
      ) {
        distance[childIn][childJn] = newChildWeight;
        queue.push([childIn, childJn, newChildWeight]);
      }
    }
  }
  let ans = distance[n - 1][n - 1] === 1e9 ? -1 : distance[n - 1][n - 1];
  return ans;
}

shortestPathBinaryMatrix.run = () => {
    shortestPathBinaryMatrix([
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ]);
};

module.exports = shortestPathBinaryMatrix;
