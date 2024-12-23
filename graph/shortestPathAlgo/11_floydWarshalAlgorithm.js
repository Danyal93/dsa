//@ts-check
class Solution {}
Solution.prototype.shortestDistance = function (mat) {
  let n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === -1) {
        mat[i][j] = Infinity;
      }
    }
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][k] == Infinity || mat[k][j] == Infinity) continue;
        mat[i][j] = Math.min(mat[i][j], mat[i][k] + mat[k][j]);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === Infinity) {
        mat[i][j] = -1;
      }
    }
  }
  return mat;
};
function floydWarshall() {
  let obj = new Solution();
  return obj.shortestDistance([
    [0, 1, 43],
    [1, 0, 6],
    [-1, -1, 0],
  ]);
}
floydWarshall.run = () => {
  floydWarshall();
};
module.exports = floydWarshall;
