//@ts-check
class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    //   console.log(adj)
    // code here
    let n = adj.length;
    let indegree = Array(n).fill(0);
    let ans = 0;
    let queue = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < adj[i].length; j++) {
        // adj[i][j] = parseInt(adj[i][j])
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
      ans++;
      for (let i = 0; i < adj[node].length; i++) {
        let child = adj[node][i];
        indegree[child]--;
        if (indegree[child] === 0) {
          queue.push(child);
        }
      }
    }
    if (ans === n) return false;
    return true;
  }
}
function cycleDetectionInDirectedGraphBFS() {
  let obj = new Solution();
  return obj.isCyclic([[1], [2], [3], [3]]);
}
cycleDetectionInDirectedGraphBFS.run = () => {
  cycleDetectionInDirectedGraphBFS();
};
module.exports = cycleDetectionInDirectedGraphBFS;
