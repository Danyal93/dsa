//@ts-check
function dfs(node, graph, visited, path, res) {
  visited[node] = true;
  path[node] = true;
  for (let i = 0; i < graph[node].length; i++) {
    let child = graph[node][i];
    if (!visited[child]) {
      let childRes = dfs(child, graph, visited, path, res);
      if (childRes) {
        return true;
      }
    } else if (path[child]) {
      return true;
    }
  }
  res.push(node);
  path[node] = false;
  return false;
}
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  let res = [];
  let visited = new Array(numCourses).fill(false);
  let path = new Array(numCourses).fill(false);

  let graph = Array(numCourses)
    .fill(undefined)
    .map(() => Array(0));

  for (let t of prerequisites) {
    graph[t[0]].push(t[1]);
  }
  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      let isCycle = dfs(i, graph, visited, path, res);
      if (isCycle) {
        return [];
      }
    }
  }
  return res
}

function cycleDetectionInDirectedGraph() {}
cycleDetectionInDirectedGraph.run = () => {
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
};

module.exports = cycleDetectionInDirectedGraph;
