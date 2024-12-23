//@ts-check

class Solution {}
Solution.prototype.dfs = function (node, adj, visited, ans) {
  visited[node] = true;
  for (let i = 0; i < adj[node].length; i++) {
    let child = adj[node][i];
    if (!visited[child]) {
      this.dfs(child, adj, visited, ans);
    }
  }
  ans.push(node);
};
/**
 * @param {number[][]} adj
 * @returns {number[]}
 */
Solution.prototype.topologicalSort = function (adj) {
  let n = adj.length;
  let visited = Array(n).fill(false);
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      this.dfs(i, adj, visited, ans);
    }
  }
  return ans.reverse();
};
function topologicalSort() {
  let obj = new Solution();
  let ans = obj.topologicalSort([[], [3], [3], [], [0, 1], [0, 2]]);
}
topologicalSort.run = () => {
  topologicalSort();
};
module.exports = topologicalSort;
