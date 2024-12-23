// @ts-check
const { Deque } = require('@datastructures-js/deque');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    const deque = new Deque();
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        while (!deque.isEmpty() && deque.front() <= i - k) {
            deque.popFront()
        }
        while (!deque.isEmpty() && nums[deque.back()] < nums[i]) {
            deque.popBack();
        }
        deque.pushBack(i)
        if (i >= k-1) output.push(nums[deque.front()]);
    }

    return output
}

maxSlidingWindow.run = () => {
    // maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
    maxSlidingWindow([1, -1], 1)
}
module.exports = maxSlidingWindow