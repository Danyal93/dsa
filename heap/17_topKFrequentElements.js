//@ts-check

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    let pq = new MinPriorityQueue()
    let ans = []
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
    }

    map.forEach((v, key) => {
        pq.enqueue(key, v)
        if (pq.size() > k) {
            pq.dequeue()
        }
    })

    while (!pq.isEmpty()) {
        ans.push(pq.front().element)
        pq.dequeue()
    }

    return ans.reverse()
};

topKFrequent.run = () => {
    topKFrequent([1, 1, 1, 1, 2, 2, 3], 2)
}

module.exports = topKFrequent