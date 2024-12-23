//@ts-check

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
function findTheCity(n, edges, distanceThreshold) {
  let dist = Array(n)
    .fill(undefined)
    .map(() => Array(n).fill(Infinity));
  for (let it of edges) {
    dist[it[0]][it[1]] = it[2];
    dist[it[1]][it[0]] = it[2];
  }
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] == Infinity || dist[k][j] == Infinity) continue;
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  let cntCity = n;
  let cityNo = -1;
  for (let city = 0; city < n; city++) {
    let cnt = 0;
    for (let adjCity = 0; adjCity < n; adjCity++) {
      if (dist[city][adjCity] <= distanceThreshold) cnt++;
    }

    if (cnt <= cntCity) {
      cntCity = cnt;
      cityNo = city;
    }
  }
  return cityNo;
}

findTheCity.run = () => {
  findTheCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ],
    4
  );
};
module.exports = findTheCity;
