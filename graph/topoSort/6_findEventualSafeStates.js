//@ts-check
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
  let n = graph.length;
  let order = [];
  let queue = [];
  let indegree = Array(n).fill(0);
  let graphRes = Array(n)
    .fill(undefined)
    .map(() => Array(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      graphRes[graph[i][j]].push(i);
      indegree[i]++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length) {
    let node = queue.shift() ?? 0;
    order.push(node);
    for (let i = 0; i < graphRes[node].length; i++) {
      let child = graphRes[node][i];
      if (--indegree[child] === 0) {
        queue.push(child);
      }
    }
  }
  return order.sort((a, b) => a - b);
}
