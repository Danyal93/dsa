//@ts-check
class Solution {}

/**
 * @param {number[][]} edges
 * @param {number} n
 * @param {number} m
 * @param {number} src
 * @returns {number[]}
 */
Solution.prototype.shortestPath = function (edges, n, m, src) {
  let graph = Array(n)
    .fill(undefined)
    .map(() => Array(0));
  let visited = Array(n).fill(false);
  let queue = [];
  let distance = Array(n).fill(1e9);

  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];
    graph[u].push(v);
    graph[v].push(u);
  }
  distance[src] = 0;
  queue.push([src, 0]);
  visited[src] = true;

  while (queue.length) {
    let [node, weight] = queue.shift() ?? [];
    for (let i = 0; i < graph[node].length; i++) {
      let child = graph[node][i];
      if (distance[child] > weight + 1) {
        distance[child] = weight + 1;
        queue.push([child, distance[child]]);
      }
    }
  }
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] === 1e9) {
      distance[i] = -1;
    }
  }
  return distance;
};
function shortestPathInUndirected() {
  let obj = new Solution();
  return obj.shortestPath(
    [
      [0, 1],
      [0, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [1, 2],
      [2, 6],
      [6, 7],
      [7, 8],
      [6, 8],
    ],
    9,
    10,
    0
  );
}
shortestPathInUndirected.run = () => {
  shortestPathInUndirected();
};
module.exports = shortestPathInUndirected;
