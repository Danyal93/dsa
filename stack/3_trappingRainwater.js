// @ts-check
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let n = height.length
    let leftMax = new Array(n), rightMax = new Array(n)
    leftMax[0] = height[0], rightMax[n - 1] = height[n - 1]
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
        rightMax[n - i - 1] = Math.max(rightMax[n - i], height[n - i - 1])
    }
    let sum = 0
    for (let i = 0; i < n; i++) {
        let current = Math.min(leftMax[i], rightMax[i]) - height[i]
        sum += current
    }

    return sum
};

trap.run = () => {
    trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
}

module.exports = trap