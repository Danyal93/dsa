//@ts-check
function solve(s, t, i, j, dp) {
    if (j < 0) return 1
    if (i < 0) return 0
    if (dp[i][j] != undefined) return dp[i][j]
    let res
    if (s[i] === t[j]) {
        let take = solve(s, t, i - 1, j - 1, dp)
        let notTake = solve(s, t, i - 1, j, dp)
        res = take + notTake
        dp[i][j] = res
    }
    else {
        let notTake = solve(s, t, i - 1, j, dp)
        res = notTake
        dp[i][j] = res
    }
    return res
}

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
    const n = s.length, m = t.length
    const dp = Array.from({ length: n }, () => Array(m).fill(undefined));
    return solve(s, t, n - 1, m - 1, dp)
};