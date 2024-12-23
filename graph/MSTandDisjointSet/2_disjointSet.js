//@ts-check

class DisjointSet {
  constructor(n) {
    this.rank = Array(n + 1).fill(0);
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

  unionByRank(u, v) {
    let ulp_u = this.findParent(u);
    let ulp_v = this.findParent(v);
    if (ulp_u == ulp_v) return;
    if (this.rank[ulp_u] < this.rank[ulp_v]) {
      this.parent[ulp_u] = ulp_v;
    } else if (this.rank[ulp_v] < this.rank[ulp_u]) {
      this.parent[ulp_v] = ulp_u;
    } else {
      this.parent[ulp_v] = ulp_u;
      this.rank[ulp_u]++;
    }
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
function disjointSet() {
  let ds = new DisjointSet();
}
disjointSet.run = () => {
  disjointSet();
};
module.exports = disjointSet;
