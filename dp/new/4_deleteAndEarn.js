//@ts-check
function solve(nums, i, map, dp) {
    if (i >= nums.length)
        return 0
    if (dp[i] != undefined) return dp[i]
    let notPick = 0 + solve(nums, i + 1, map, dp)
    let pick = map.get(nums[i]) * nums[i]
    if (nums[i] + 1 == nums[i + 1])
        pick += solve(nums, i + 2, map, dp)
    else
        pick += solve(nums, i + 1, map, dp)
    dp[i] = Math.max(notPick, pick)
    return dp[i]
}
/**
 * @param {number[]} nums
 * @return {number}
 */
function deleteAndEarn(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
    }
    nums = [... new Set(nums)]
    nums.sort((a, b) => a - b)
    const dp = Array(nums.length).fill(undefined)

    return solve(nums, 0, map, dp)
};

deleteAndEarn.run = function () {
    deleteAndEarn([2, 3, 3, 3, 4, 2])
}

module.exports = deleteAndEarn