//@ts-check

function solve(nums, i, pre, dp) {
    if (i > nums.length) return 0
    if (dp[i][pre] != undefined) return dp[i][pre]
    let notPick = 0 + solve(nums, i + 1, pre, dp)
    let pick = 0
    if (pre == 0 || nums[pre - 1] < nums[i - 1]) {
        pick = 1 + solve(nums, i + 1, i, dp)
    }
    let result = Math.max(pick, notPick)
    dp[i][pre] = result
    return result
}


/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    let n = nums.length
    let ans = 1
    const dp = Array(n).fill(1)
    for (let i = 0; i < n; i++) {
        for (let pre = 0; pre < i; pre++) {
            if (nums[pre] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[pre] + 1)
            }
        }
        ans = Math.max(ans, dp[i])
    }
    return ans
    // const dp = Array.from({ length: n+1 }, () => Array(n+1).fill(undefined));
    // let ans = solve(nums, 1, 0, dp)
    // return ans
};

lengthOfLIS.run = () => {
    lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
}
module.exports = lengthOfLIS