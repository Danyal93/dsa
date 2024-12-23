//@ts-check
function dfs(arr, k, start, dp) {
    let n = arr.length;
    if (start >= n) return 0;
    if (dp[start] != undefined) return dp[start]
    let maxSum = 0, maxEle = 0;
    for (let i = start; i < Math.min(n, start + k); i++) {
        maxEle = Math.max(maxEle, arr[i]);
        maxSum = Math.max(maxSum, maxEle * (i - start + 1) + dfs(arr, k, i + 1, dp));
    }
    dp[start] = maxSum;
    return maxSum;
}
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function maxSumAfterPartitioning(arr, k) {
    let n = arr.length;
    let dp = Array(n).fill(undefined)
    return dfs(arr, k, 0, dp);
};


maxSumAfterPartitioning.run = function () {
    maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)
}

module.exports = maxSumAfterPartitioning