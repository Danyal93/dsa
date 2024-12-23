//@ts-check

// User function Template for javascript
class Solution {
  // Function to return Breadth First Traversal of the given graph.
  bfsOfGraph(adj) {
    // code here
    let queue = [],
      ans = [];
    let n = adj.length;
    let visited = Array(n).fill(false);
    visited[0] = true;
    queue.push(0);
    while (queue.length) {
      let node = queue.shift() ?? 0;
      ans.push(node);
      for (let i = 0; i < adj[node].length; i++) {
        let child = adj[node][i];
        if (!visited[child]) {
          visited[child] = true;
          queue.push(child);
        }
      }
    }
    return ans;
  }
}

function bfsTraversal() {
  let obj = new Solution();
  return obj.bfsOfGraph([[2, 3, 1], [0], [0, 4], [0], [2]]);
}
bfsTraversal.run = () => {
  console.log(bfsTraversal());
};
module.exports = bfsTraversal;
