//@ts-check

class Solution {
  bfs(startNode, adj, visited) {
    visited[startNode] = true;
    let queue = [];
    let ans = false;
    queue.push({ node: startNode, parent: -1 });
    while (queue.length) {
      let { node, parent } = queue.shift() ?? {};
      for (let i = 0; i < adj[node].length; i++) {
        let child = adj[node][i];
        if (!visited[child]) {
          visited[child] = true;
          queue.push({ node: child, parent: node });
        } else if (visited[child] && parent != child) {
          ans = true;
          return ans;
        }
      }
    }
    return ans;
  }
  isCycle(adj) {
    // code here
    let n = adj.length;
    let visited = Array(n).fill(false);
    let ans = false;
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        ans = this.bfs(i, adj, visited);
        if (ans) break;
      }
    }
    return ans;
  }
}
function cycleDetectionInUnirectedGraphBSF(adj) {
  let obj = new Solution();
  let ans = obj.isCycle(adj);
  console.log(ans);
}
cycleDetectionInUnirectedGraphBSF.run = () => {
  cycleDetectionInUnirectedGraphBSF([[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]);
};
module.exports = cycleDetectionInUnirectedGraphBSF;
