//@ts-check
function countOneAndZero(s) {
    let zero = 0, one = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0')
            zero++
        else
            one++
    }
    return { zero, one }
}
function solve(strs, i, m, n, dp) {
    if (i < 0) {
        return 0
    }
    if (dp[i][m][n] != undefined) return dp[i][m][n]
    let { zero, one } = countOneAndZero(strs[i])

    let notPick = solve(strs, i - 1, m, n, dp)
    let pick = 0
    if (zero <= m && one <= n) {
        pick = 1 + solve(strs, i - 1, m - zero, n - one, dp)
    }
    let res = Math.max(pick, notPick)
    dp[i][m][n] = res
    return res
}

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findMaxForm(strs, m, n) {
    let size = strs.length
    const dp = Array.from({ length: size }, () => Array.from({ length: m + 1 }, () => () => Array(n + 1).fill(undefined)))
    return solve(strs, strs.length - 1, m, n, dp)
};

module.exports = findMaxForm