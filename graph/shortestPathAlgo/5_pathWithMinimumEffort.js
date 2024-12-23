//@ts-check
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[][]} heights
 * @return {number}
 */
function minimumEffortPath(heights) {
  let m = heights.length;
  let n = heights[0].length;
  let minPq = new MinPriorityQueue({
    priority: (x) => x[2],
  });
  let distance = Array(m)
    .fill(0)
    .map(() => Array(n).fill(1e9));
  distance[0][0] = 0;
  minPq.enqueue([0, 0, 0]);
  let direction = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];
  while (minPq.size()) {
    let [iN, jN, weight] = minPq.front().element ?? [];
    minPq.dequeue();
    for (let i = 0; i < direction.length; i++) {
      let childIn = direction[i].dx + iN;
      let childJn = direction[i].dy + jN;
      if (childIn >= 0 && childJn >= 0 && childIn < m && childJn < n) {
        let newChildWeight = Math.max(
          Math.abs(heights[iN][jN] - heights[childIn][childJn]),
          weight
        );
        if (newChildWeight < distance[childIn][childJn]) {
          distance[childIn][childJn] = newChildWeight;
          minPq.enqueue([childIn, childJn, newChildWeight]);
        }
      }
    }
  }
  let ans = distance[m - 1][n - 1]; // === 1e9 ? -1 : distance[m - 1][n - 1];
  return ans;
}

minimumEffortPath.run = () => {
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ]);
};

module.exports = minimumEffortPath;
