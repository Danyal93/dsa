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
    let dp = new Array(n + 1).fill(-1)
    return solve(nums, n - 1, dp)
};
rob.run = () => {
    rob([2, 7, 9, 3, 1])
}
module.exports = rob