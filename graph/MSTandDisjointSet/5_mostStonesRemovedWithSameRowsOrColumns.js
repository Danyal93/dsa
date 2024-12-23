//@ts-check
function bfs(source, stones, visited) {
  let queue = [];
  let n = stones.length;
  visited[source] = true;
  queue.push(stones[source]);
  while (queue.length) {
    let node = queue.shift() ?? [];
    for (let i = 0; i < n; i++) {
      let child = stones[i];
      if (!visited[i]) {
        if (child[0] === node[0] || child[1] === node[1]) {
          visited[i] = true;
          queue.push(child);
        }
      }
    }
  }
}
/**
 * @param {number[][]} stones
 * @return {number}
 */
function removeStones1(stones) {
  let component = 0;
  let n = stones.length;
  let visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i, stones, visited);
      component++;
    }
  }
  return n - component;
}

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
 * @param {number[][]} stones
 * @return {number}
 */
function removeStones(stones) {
  let component = 0;
  let n = stones.length;
  let maxRow = 0,
    maxCol = 0;
  for (const stone of stones) {
    maxRow = Math.max(maxRow, stone[0]);
    maxCol = Math.max(maxCol, stone[1]);
  }
  let stoneNodes = new Set();
  let djs = new DisjointSet(maxRow + maxCol + 1);
  for (let i = 0; i < n; i++) {
    let row = stones[i][0];
    let col = stones[i][1] + maxRow + 1;
    djs.unionBySize(row, col);
    stoneNodes.add(row);
    stoneNodes.add(col);
  }
  for (const stoneNode of stoneNodes) {
    if (djs.parent[stoneNode] === stoneNode) {
      component++;
    }
  }
  return n - component;
}

removeStones.run = () => {
  removeStones([
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
  ]);
};
module.exports = removeStones;
