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

/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
  let n = grid.length;
  let djs = new DisjointSet(n * n + 1);
  let directions = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let coordinate = i * n + j;
      if (grid[i][j] === 1) {
        for (const delata of directions) {
          let { dx, dy } = delata;
          let adjRow = i + dx;
          let adjCol = j + dy;
          if (
            adjRow >= 0 &&
            adjCol >= 0 &&
            adjRow < n &&
            adjCol < n &&
            grid[adjRow][adjCol]
          ) {
            let adjCoordinate = adjRow * n + adjCol;
            if (djs.findParent(coordinate) != djs.findParent(adjCoordinate)) {
              djs.unionBySize(coordinate, adjCoordinate);
            }
          }
        }
      }
    }
  }
  let ans = Math.max(...djs.size);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        let tempAns = 1;
        let adjParents = new Set();
        for (const delata of directions) {
          let { dx, dy } = delata;
          let adjRow = i + dx;
          let adjCol = j + dy;
          if (
            adjRow >= 0 &&
            adjCol >= 0 &&
            adjRow < n &&
            adjCol < n &&
            grid[adjRow][adjCol] === 1
          ) {
            let adjCoordinate = adjRow * n + adjCol;
            let parent = djs.findParent(adjCoordinate);
            adjParents.add(parent);
          }
        }
        for (const parents of adjParents) {
          tempAns += djs.size[parents];
        }
        ans = Math.max(tempAns, ans);
      }
    }
  }

  return ans;
}

largestIsland.run = () => {
  largestIsland([
    [0, 0],
    [0, 0],
  ]);
};

module.exports = largestIsland;
