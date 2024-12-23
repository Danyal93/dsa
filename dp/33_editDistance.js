//@ts-check
function solve(word1, word2, i, j, dp) {
    if (i < 0) return j + 1
    if (j < 0) return i + 1
    if (dp[i][j] != undefined) return dp[i][j]
    let res
    if (word1[i] == word2[j]) {
        res = solve(word1, word2, i - 1, j - 1, dp)
    }
    else {
        res = 1 + Math.min(solve(word1, word2, i - 1, j, dp), solve(word1, word2, i, j - 1, dp), solve(word1, word2, i - 1, j - 1, dp))
    }
    dp[i][j] = res
    return res
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
    let n = word1.length, m = word2.length
    const dp = Array.from({ length: n }, () => Array(m).fill(undefined));
    return solve(word1, word2, n - 1, m - 1, dp)
};
module.exports = minDistance