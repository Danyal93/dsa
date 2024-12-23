//@ts-check
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

function findCheapestPrice(n, flights, src, dst, k) {
  let adj = Array(n)
    .fill(undefined)
    .map(() => Array(0));
  for (let flight of flights) {
    let [u, v, w] = flight;
    adj[u].push([v, w]);
  }
  let distance = Array(n).fill(1e9);
  let queue = [];
  queue.push([0, src, 0]);
  distance[src] = 0;
  while (queue.length) {
    let [stops, node, weight] = queue.shift() ?? [];
    for (let data of adj[node]) {
      let [child, childWeight] = data;
      let newChildWeight = weight + childWeight;
      if (distance[child] > newChildWeight && stops <= k) {
        distance[child] = newChildWeight;
        queue.push([stops + 1, child, newChildWeight]);
      }
    }
  }
  if (distance[dst] === 1e9) return -1;
  return distance[dst];
}

findCheapestPrice.run = () => {
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  );
};
module.exports = findCheapestPrice;
