//@ts-check
function numberOdWays(index, dp) {
    if (index === 0 || index === 1) return 1
    if (dp[index] != -1) return dp[index]
    let onestep = numberOdWays(index - 1, dp)
    let twoStep = numberOdWays(index - 2, dp)
    dp[index] = onestep + twoStep
    return dp[index]
}
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    let dp = new Array(n + 1).fill(-1)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
    // return numberOdWays(n, dp)
};

climbStairs.run = () => {
    return climbStairs(5)
}
module.exports = climbStairs