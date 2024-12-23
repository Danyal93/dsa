//@ts-check
class Solution {
  dfs(node, adj, visited) {
    visited[node] = true;
    for (let i = 0; i < adj[node].length; i++) {
      let child = adj[node][i];
      if (!visited[child]) {
        this.dfs(child, adj, visited);
      }
    }
  }
  numProvinces(V, isConnected) {
    let ans = 0;
    let n = isConnected.length;
    let visited = Array(n).fill(false);
    let adj = Array(n)
      .fill(undefined)
      .map(() => Array());
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (isConnected[i][j] && i != j) adj[i].push(j);
      }
    }
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        ans++;
        this.dfs(i, adj, visited);
      }
    }
    return ans;
  }
}

function connectedComponentsProblemInMatrix() {
  let obj = new Solution();
  return obj.numProvinces([
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ]);
}

connectedComponentsProblemInMatrix.run = () => {
  connectedComponentsProblemInMatrix();
};
module.exports = connectedComponentsProblemInMatrix;
