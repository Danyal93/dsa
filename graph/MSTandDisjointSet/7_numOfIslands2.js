//@ts-check
class DisjointSet {
  constructor(n) {
    this.parent = Array(n + 1).fill(0);
    this.size = Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  findParent(node) {
    if (node == this.parent[node]) return node;
    return (this.parent[node] = this.findParent(this.parent[node]));
  }

  unionBySize(u, v) {
    let ulp_u = this.findParent(u);
    let ulp_v = this.findParent(v);
    if (ulp_u == ulp_v) return;
    if (this.size[ulp_u] < this.size[ulp_v]) {
      this.parent[ulp_u] = ulp_v;
      this.size[ulp_v] += this.size[ulp_u];
    } else {
      this.parent[ulp_v] = ulp_u;
      this.size[ulp_u] += this.size[ulp_v];
    }
  }
}

class Solution {}
Solution.prototype.numOfIslands = function (rows, cols, operators) {
  let ans = [];
  let count = 0;
  let djs = new DisjointSet(rows * cols + 1);
  let visited = Array(rows)
    .fill(false)
    .map(() => Array(cols).fill(false));
  let directions = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];
  for (const operator of operators) {
    let [row, col] = operator;
    let coordinate = row * cols + col;
    if (visited[row][col]) {
      ans.push(count);
      continue;
    }
    visited[row][col] = true;
    count++;
    for (const delta of directions) {
      let { dx, dy } = delta;
      let adjRow = row + dx;
      let adjCol = col + dy;
      if (adjRow >= 0 && adjCol >= 0 && adjRow < rows && adjCol < cols) {
        if (visited[adjRow][adjCol]) {
          let adjCoordinate = adjRow * cols + adjCol;
          if (djs.findParent(coordinate) != djs.findParent(adjCoordinate)) {
            count--;
            djs.unionBySize(coordinate, adjCoordinate);
          }
        }
      }
    }
    ans.push(count);
  }
  return ans;
};

function numOfIslands2() {
  let obj = new Solution();
  return obj.numOfIslands(4, 5, [
    [1, 1],
    [0, 1],
    [3, 3],
    [3, 4],
  ]);
}
numOfIslands2.run = () => {
  numOfIslands2();
};

module.exports = numOfIslands2;
