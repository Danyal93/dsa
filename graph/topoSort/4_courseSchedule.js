//@ts-check

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  let order = [];
  let queue = [];
  let graph = Array(numCourses)
    .fill(undefined)
    .map(() => Array(0));
  let indegree = Array(numCourses).fill(0);
  for (let t of prerequisites) {
    graph[t[0]].push(t[1]);
  }
  for (let i = 0; i < numCourses; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      indegree[graph[i][j]]++;
    }
  }
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length) {
    let node = queue.shift() ?? 0;
    order.push(node);
    for (let i = 0; i < graph[node].length; i++) {
      let child = graph[node][i];
      if (--indegree[child] === 0) {
        queue.push(child);
      }
    }
  }
  if (order.length === numCourses) return true;
  return false;
}
function courseSchedule() {}

courseSchedule.run = () => {
  canFinish(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
};

module.exports = courseSchedule;
