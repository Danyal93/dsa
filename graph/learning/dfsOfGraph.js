//@ts-check

class Solution {
  dfs(node, adj, visited, ans) {
    visited[node] = true;
    ans.push(node);
    for (let i = 0; i < adj[node].length; i++) {
      let child = adj[node][i];
      if (!visited[child]) {
        this.dfs(child, adj, visited, ans);
      }
    }
  }
  // Function to return a list containing the DFS traversal of the graph.
  dfsOfGraph(adj) {
    // code here
    let n = adj.length;
    let visited = Array(n).fill(false);
    let ans = [];
    this.dfs(0, adj, visited, ans);
    return ans
  }
}

function dfsTraversal() {
  let obj = new Solution();
  return obj.dfsOfGraph([[2, 3, 1], [0], [0, 4], [0], [2]]);
}
dfsTraversal.run = () => {
  console.log(dfsTraversal());
};
module.exports = dfsTraversal;
