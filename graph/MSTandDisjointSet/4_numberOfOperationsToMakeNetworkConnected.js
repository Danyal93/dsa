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
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function makeConnected(n, connections) {
  let extraEdge = 0;
  let djs = new DisjointSet(n);
  for (const connection of connections) {
    let [u, v] = connection;
    if (djs.findParent(u) == djs.findParent(v)) {
      extraEdge += 1;
    } else {
      djs.unionBySize(u, v);
    }
  }
  let networkComponents = 0;
  for (let i = 0; i < n; i++) {
    if (djs.parent[i] === i) {
      networkComponents++;
    }
  }
  let requiredEdge = networkComponents - 1;
  if (extraEdge >= requiredEdge) return requiredEdge;
  return -1;
}
makeConnected.run = () => {
  makeConnected(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
  ]);
};

module.exports = makeConnected;
