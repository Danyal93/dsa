//@ts-check
function bfs(node, adj, visited) {
  let queue = [];
  visited[node] = true;
  queue.push(node);
  while (queue.length) {
    let node = queue.shift() ?? 0;
    for (let i = 0; i < adj[node].length; i++) {
      let child = adj[node][i];
      if (!visited[child]) {
        visited[child] = true;
        queue.push(child);
      }
    }
  }
}
function dfs(node, adj, visited) {
  visited[node] = true;
  for (let i = 0; i < adj[node].length; i++) {
    let child = adj[node][i];
    if (!visited[child]) {
      dfs(child, adj, visited);
    }
  }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  let ans = 0;
  let n = isConnected.length;
  let visited = Array(n).fill(false);
  let adj = Array(n)
    .fill(undefined)
    .map(() => Array());
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] && i != j) adj[i].push(j);
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      ans++;
      dfs(i, adj, visited);
    }
  }
  return ans;
}

function numberOfProvinces() {}
numberOfProvinces.run = () => {
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]);
};
module.exports = numberOfProvinces;
