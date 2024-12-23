//@ts-check

class Solution {}

/**
 * @param {number[][][]} adj
 * @param {number} src
 * @return {number[]}
 */
Solution.prototype.dijkstra = function (adj, src) {
  let n = adj.length;
  let heap = [];
  let distance = Array(n).fill(1e9);
  heap.push([src, 0]);
  distance[src] = 0;
  while (heap.length) {
    let [node, weight] = heap.shift() ?? [];
    for (let i = 0; i < adj[node].length; i++) {
      let [child, childWeight] = adj[node][i];
      if (distance[child] > weight + childWeight) {
        distance[child] = weight + childWeight;
        heap.push([child, distance[child]]);
        heap.sort((a, b) => a[1] - b[1]);
      }
    }
  }
  return distance;
};
function djisktraAlgorithm() {
  let obj = new Solution();
  return obj.dijkstra(
    [
      [
        [1, 1],
        [2, 6],
      ],
      [
        [2, 3],
        [0, 1],
      ],
      [
        [1, 3],
        [0, 6],
      ],
    ],
    2
  );
}
djisktraAlgorithm.run = () => {
  djisktraAlgorithm();
};
module.exports = djisktraAlgorithm;
