//@ts-check

class Solution {}
Solution.prototype.spanningTree = function (v, adj) {
  let visited = Array(v).fill(0);
  let minPq = [];
  let ans = 0;
  minPq.push([0, 0]);
  while (minPq.length) {
    let [weight, node] = minPq.shift() ?? [];
    if (visited[node]) {
      continue;
    }
    visited[node] = true;
    ans += weight;
    for (let childData of adj[node]) {
      let [child, edgeWeight] = childData;
      if (!visited[child]) {
        minPq.push([edgeWeight, child]);
        minPq.sort((a, b) => a[0] - b[0]);
      }
    }
  }
  return ans;
};

function primsAlgorithm() {
  let obj = new Solution();
  return obj.spanningTree(3, [
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
  ]);
}
primsAlgorithm.run = () => {
  primsAlgorithm();
};
module.exports = primsAlgorithm;
