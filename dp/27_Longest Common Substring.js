//@ts-check
let max = 0
function solve(nums1, nums2, i, j, dp) {
    if (i < 0 || j < 0) return 0
    if (dp[i][j] != undefined) return dp[i][j]
    let equal = 0
    if (nums1[i] == nums2[j]) {
        equal = 1 + solve(nums1, nums2, i - 1, j - 1, dp)
        max = Math.max(max, equal)
    }
    solve(nums1, nums2, i - 1, j, dp)
    solve(nums1, nums2, i, j - 1, dp)
    dp[i][j] = equal
    return dp[i][j]
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function longestCommonSubstring(nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length
    const dp = Array.from({ length: n1 }, () => Array(n2).fill(undefined));
    max = 0;
    solve(nums1, nums2, n1 - 1, n2 - 1, dp)
    return max
};


module.exports = longestCommonSubstring