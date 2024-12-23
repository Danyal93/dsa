//@ts-check
class Solution {}
Solution.prototype.dfsTopo = function (node, graph, visited, output) {
  visited[node] = true;
  for (let i = 0; i < graph[node].length; i++) {
    let [child, weight] = graph[node][i];
    if (!visited[child]) {
      this.dfsTopo(child, graph, visited, output);
    }
  }
  output.push(node);
};
/**
 * @param {number} V
 * @param {number} E
 * @param {number[][]} edges
 */
Solution.prototype.shortestPath = function (V, E, edges) {
  let graph = Array(V)
    .fill(undefined)
    .map(() => Array(0));
  let visited = Array(V).fill(false);
  let output = [];
  let distance = Array(V).fill(1e9);
  distance[0] = 0;
  for (let i = 0; i < edges.length; i++) {
    let [u, v, w] = edges[i];
    graph[u].push([v, w]);
  }
  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      this.dfsTopo(i, graph, visited, output);
    }
  }
  output = output.reverse();
  for (let i = 0; i < output.length; i++) {
    let node = output[i];
    for (let j = 0; j < graph[node].length; j++) {
      let [child, weight] = graph[node][j];
      distance[child] = Math.min(distance[child], weight + distance[node]);
    }
  }
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] === 1e9) {
      distance[i] = -1;
    }
  }
  return distance;
};

function shortestPathInDAG() {
  let obj = new Solution();
  return obj.shortestPath(6, 7, [
    [0, 1, 2],
    [0, 4, 1],
    [4, 5, 4],
    [4, 2, 2],
    [1, 2, 3],
    [2, 3, 6],
    [5, 3, 1],
  ]);
}
shortestPathInDAG.run = () => {
  shortestPathInDAG();
};
module.exports = shortestPathInDAG;
