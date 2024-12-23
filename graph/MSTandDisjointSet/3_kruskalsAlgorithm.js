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
/**
 * @param {number} v
 * @param {number[][][]} adj
 * @returns {number}
 */

Solution.prototype.spanningTree = function (v, adj) {
  /** @type {number[][]} */
  let edges = [];
  let mstWt = 0;
  for (let u = 0; u < v; u++) {
    for (const data of adj[u]) {
      let [v, w] = data;
      edges.push([w, u, v]);
    }
  }
  edges.sort((a, b) => a[0] - b[0]);
  let djs = new DisjointSet(v);
  for (const edge of edges) {
    let [w, u, v] = edge;
    let ulp_u = djs.findParent(u);
    let ulp_v = djs.findParent(v);
    if (ulp_u != ulp_v) {
      mstWt += w;
      djs.unionBySize(u, v);
    }
  }
  return mstWt;
};

function kruskalsAlgorithm() {
  let obj = new Solution();
  let adj = [
    [
      [1, 5],
      [2, 1],
    ],
    [
      [0, 5],
      [2, 3],
    ],
    [
      [1, 3],
      [0, 1],
    ],
  ];
  return obj.spanningTree(3, adj);
}
kruskalsAlgorithm.run = () => {
  kruskalsAlgorithm();
};

module.exports = kruskalsAlgorithm;