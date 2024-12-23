//@ts-check

class Solution {}

/**
 * @param {number[][]} adj
 * @returns {number[]}
 */
Solution.prototype.topologicalSort = function (adj) {
  let n = adj.length;
  let indegree = Array(n).fill(0);
  let ans = [];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      let child = adj[i][j];
      indegree[child]++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length) {
    let node = queue.shift() ?? 0;
    ans.push(node);
    for (let i = 0; i < adj[node].length; i++) {
      let child = adj[node][i];
      indegree[child]--;
      if (indegree[child] === 0) {
        queue.push(child);
      }
    }
  }
  return ans;
};
function kahnAlgorithm() {
  let obj = new Solution();
  let ans = obj.topologicalSort([[], [3], [3], [], [0, 1], [0, 2]]);
}
kahnAlgorithm.run = () => {
  kahnAlgorithm();
};
module.exports = kahnAlgorithm;
