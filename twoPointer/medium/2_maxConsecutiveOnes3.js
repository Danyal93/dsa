//@ts-check
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
    let ans = 0
    let map = new Map()
    let i = 0, j = 0
    let n = nums.length
    while (j < n) {
        map.set(nums[j], (map.get(nums[j]) ?? 0) + 1)
        while (i < j && map.get(0) > k) {
            map.set(nums[i], (map.get(nums[i]) ?? 0) - 1)
            i++
        }
        if (!map.has(0) || map.get(0) <= k)
            ans = Math.max(ans, j - i + 1)
        j++
    }
    return ans
};
longestOnes.run = () => {
    // longestOnes([0, 0, 1, 1, 1, 0, 0], 0)
    longestOnes([1, 1, 1, 1, 1], 0)
}

module.exports = longestOnes