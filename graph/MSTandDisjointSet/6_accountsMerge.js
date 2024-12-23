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
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  let n = accounts.length;
  let mergedMail = Array(n)
    .fill(undefined)
    .map(() => Array(0));
  let djs = new DisjointSet(n);

  let mailToNodeMap = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      if (!mailToNodeMap.has(accounts[i][j])) {
        mailToNodeMap.set(accounts[i][j], i);
      } else {
        djs.unionBySize(i, mailToNodeMap.get(accounts[i][j]));
      }
    }
  }
  for (let data of mailToNodeMap) {
    let [mail, node] = data;
    let parent = djs.findParent(node);
    mergedMail[parent].push(mail);
  }
  let ans = mergedMail
    .map((e, i) => [accounts[i][0], ...e.sort()])
    .filter((m) => m.length !== 1).sort();
  return ans;
}
accountsMerge.run = () => {
  accountsMerge([
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"],
  ]);
};
module.exports = accountsMerge;
