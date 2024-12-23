//@ts-check
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  push(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item;
  }
  shift() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  get length() {
    return this.backIndex - this.frontIndex + 1;
  }
  get printQueue() {
    return this.items;
  }
}
class Solution {}
/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
Solution.prototype.minimumMultiplications = function (arr, start, end) {
  let mod = 1e5;
  let queue = new Queue();
  let distance = Array(1e5).fill(1e9);
  distance[start] = 0;
  queue.push([0, start]);
  while (queue.length) {
    let [step, node] = queue.shift() ?? [];
    for (let multiplier of arr) {
      let child = (node * multiplier) % mod;
      let newStep = step + 1;
      if (distance[child] > newStep) {
        distance[child] = newStep;
        if (child === end) {
          return newStep;
        }
        queue.push([newStep, child]);
      }
    }
  }
  let ans = distance[end];
  if (ans === 1e9) return -1;
  return ans;
};
function minimumMultiplicationsToReachEnd() {
  let obj = new Solution();
  return obj.minimumMultiplications([3, 4, 65], 7, 66175);
}
minimumMultiplicationsToReachEnd.run = () => {
  minimumMultiplicationsToReachEnd();
};

module.exports = minimumMultiplicationsToReachEnd;
