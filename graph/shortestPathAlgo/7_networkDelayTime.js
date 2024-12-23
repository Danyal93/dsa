//@ts-check

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTime(times, n, k) {
  let adj = Array(n + 1)
    .fill(undefined)
    .map(() => Array(0));
  for (let data of times) {
    let [u, v, w] = data;
    adj[u].push([v, w]);
  }
  let minTime = Array(n + 1).fill(1e9);
  let queue = [];
  minTime[0] = 0;
  minTime[k] = 0;
  queue.push([k, 0]);
  while (queue.length) {
    let [node, weight] = queue.shift() ?? [];
    for (let data of adj[node]) {
      let [child, childWeight] = data;
      let newChildWeight = weight + childWeight;
      if (minTime[child] > newChildWeight) {
        minTime[child] = newChildWeight;
        queue.push([child, newChildWeight]);
      }
    }
  }
  if (minTime.some((v) => v === 1e9)) return -1;
  let ans = Math.max(...minTime);
  return ans;
}

networkDelayTime.run = () => {
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  );
};
module.exports = networkDelayTime;