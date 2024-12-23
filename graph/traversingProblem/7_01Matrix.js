//@ts-check

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function updateMatrix(mat) {
  let m = mat.length;
  let n = mat[0].length;
  let queue = [];
  let visited = Array(m)
    .fill(undefined)
    .map(() => Array(n).fill(false));
  let ans = Array(m)
    .fill(undefined)
    .map(() => Array(n).fill(0));
  let direction = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        visited[i][j] = true;
        queue.push([i, j, 0]);
      }
    }
  }
  while (queue.length) {
    let [iN, jN, dis] = queue.shift() ?? [];
    ans[iN][jN] = dis;
    for (let i = 0; i < direction.length; i++) {
      let childIN = iN + direction[i].dx;
      let childJN = jN + direction[i].dy;

      if (
        childIN >= 0 &&
        childIN < m &&
        childJN >= 0 &&
        childJN < n &&
        // mat[childIN][childJN] === 0 &&
        !visited[childIN][childJN]
      ) {
        visited[childIN][childJN] = true;
        queue.push([childIN, childJN, dis + 1]);
      }
    }
  }
  return ans;
}

function O1Matrix() {}
O1Matrix.run = () => {
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]);
};
module.exports = O1Matrix;
