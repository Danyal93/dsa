//@ts-check
class Solution {}

Solution.prototype.dfsTopo = function (node, graph, visited, output) {
  visited[node] = true;
  let childArray = graph[node];
  for (let i = 0; i < childArray.length; i++) {
    let child = childArray[i];
    if (!visited[child]) {
      this.dfsTopo(child, graph, visited, output);
    }
  }
  output.push(`${String.fromCharCode(97 + node)}`);
};
/**
 * @param {string[]} dict
 * @param {number} k
 * @return {string}
 */
Solution.prototype.findOrder = function (dict, k) {
  let output = [];
  let graph = Array(k)
    .fill(undefined)
    .map(() => Array(0));
  for (let i = 0; i < dict.length - 1; i++) {
    let m = Math.min(dict[i].length, dict[i + 1].length);
    for (let j = 0; j < m; j++) {
      if (dict[i][j] != dict[i + 1][j]) {
        let u = dict[i][j].charCodeAt(0) - "a".charCodeAt(0);
        let v = dict[i + 1][j].charCodeAt(0) - "a".charCodeAt(0);
        graph[u].push(v);
        break;
      }
    }
  }
  let visited = Array(k).fill(false);
  for (let i = 0; i < k; i++) {
    if (!visited[i]) this.dfsTopo(i, graph, visited, output);
  }
  let ans = output.reverse().join("");
  return ans;
};

function alienDictionary() {
  let obj = new Solution();
  return obj.findOrder(["baa", "abcd", "abca", "cab", "cad"], 4);
}
alienDictionary.run = () => {
  alienDictionary();
};

module.exports = alienDictionary;
