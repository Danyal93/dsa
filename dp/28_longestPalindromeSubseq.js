//@ts-check
function solve(i, j, text1, text2, dp) {
    if (i < 0 || j < 0) return 0
    if (dp[i][j] != undefined) return dp[i][j]
    if (text1[i] == text2[j]) return 1 + solve(i - 1, j - 1, text1, text2, dp)
    let reduceI = solve(i - 1, j, text1, text2, dp)
    let reduceJ = solve(i, j - 1, text1, text2, dp)
    let result = Math.max(reduceI, reduceJ)
    dp[i][j] = result
    return result

}
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
    const n = text1.length, m = text2.length
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(undefined));
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0
                continue
            }
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
                continue
            }
            let reduceI = dp[i - 1][j]
            let reduceJ = dp[i][j - 1]
            let result = Math.max(reduceI, reduceJ)
            dp[i][j] = result
        }
    }
    return dp[n][m]

    // const dp = Array.from({ length: n }, () => Array(m).fill(undefined));
    // return solve(n - 1, m - 1, text1, text2, dp)
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    return longestCommonSubsequence(s, s.split("").reverse().join(""))
};