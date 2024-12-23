//@ts-check
function solve(nums, index, dp) {
    if (index == 0) return nums[0]
    if (index < 0) return 0
    if (dp[index] != -1) return dp[index]
    let pick = nums[index] + solve(nums, index - 2, dp)
    let notPick = solve(nums, index - 1, dp)
    let result = Math.max(pick, notPick)
    dp[index] = result
    return dp[index]
}


/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let n = nums.length
    if (n === 1) return nums[1]
    let nums1 = nums.slice(0, n - 1)
    let nums2 = nums.slice(1, n)
    let dp1 = new Array(n + 1).fill(-1)
    let dp2 = new Array(n + 1).fill(-1)
    return Math.max(solve(nums1, n - 2, dp1), solve(nums2, n - 2, dp2))
};
function rob2(nums) {
}
rob2.run = () => {
    rob([1])
}
module.exports = rob2