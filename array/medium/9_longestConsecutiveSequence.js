//@ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    let n = nums.length
    let map = new Map()
    let ans = 0
    for (let i = 0; i < n; i++) {
        map.set(nums[i], true)
    }
    for (let i = 0; i < n; i++) {
        if (map.has(nums[i] - 1)) continue
        let j = 1
        while (map.has(nums[i] + j)) {
            j++
        }
        ans = Math.max(ans, j)
    }
    return ans
};