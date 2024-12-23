//@ts-check
function bfs(startNode, graph, visited, belongingSet, currentSet) {
  let queue = [];
  queue.push(startNode);
  visited[startNode] = true;
  belongingSet[startNode] = currentSet;
  while (queue.length) {
    let node = queue.shift();
    for (let i = 0; i < graph[node].length; i++) {
      let child = graph[node][i];
      if (!visited[child]) {
        visited[child] = true;
        belongingSet[child] = belongingSet[node] === "A" ? "B" : "A";
        queue.push(child);
      } else if (visited[child] && belongingSet[child] === belongingSet[node]) {
        return false;
      }
    }
  }
  return true;
}

function dfs(node, graph, visited, belongingSet, currentSet) {
  visited[node] = true;
  belongingSet[node] = currentSet;
  for (let i = 0; i < graph[node].length; i++) {
    let child = graph[node][i];
    if (!visited[child]) {
      let set = belongingSet[node] === "A" ? "B" : "A";
      let childRes = dfs(child, graph, visited, belongingSet, set);
      if (!childRes) {
        return false;
      }
    } else if (visited[child] && belongingSet[child] === belongingSet[node]) {
      return false;
    }
  }
  return true;
}
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  let n = graph.length;
  let visited = Array(n).fill(0);
  let belongingSet = Array(n).fill(undefined);
  let ans = true;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      let isBipartite = dfs(i, graph, visited, belongingSet, "A");
      if (!isBipartite) {
        return false;
      }
    }
  }
  return ans;
}

isBipartite.run = () => {
  isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ]);
};
module.exports = isBipartite;
