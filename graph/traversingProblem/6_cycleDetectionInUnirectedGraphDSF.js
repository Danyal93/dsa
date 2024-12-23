//@ts-check

class Solution {
  dfs(node, parent, adj, visited) {
    visited[node] = true;
    let ans = false;

    for (let i = 0; i < adj[node].length; i++) {
      let child = adj[node][i];
      if (!visited[child]) {
        if (this.dfs(child, node, adj, visited)) return true;
      } else if (visited[child] && parent != child) {
        ans = true;
        return ans;
      }
    }

    return ans;
  }
  isCycle(adj) {
    let n = adj.length;
    let visited = Array(n).fill(false);
    let ans = false;
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        ans = this.dfs(i, -1, adj, visited);
        if (ans) break;
      }
    }
    return ans;
  }
}
function cycleDetectionInUnirectedGraphDSF(adj) {
  let obj = new Solution();
  let ans = obj.isCycle(adj);
  console.log(ans);
}
cycleDetectionInUnirectedGraphDSF.run = () => {
  cycleDetectionInUnirectedGraphDSF([[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]);
};
module.exports = cycleDetectionInUnirectedGraphDSF;
