function solve(i, j, dp) {
    if (i < 0 || j < 0) return 0
    if (i === 0 && j === 0) return 1
    if (dp[i][j] != -1) return dp[i][j]
    let up = solve(i - 1, j, dp)
    let left = solve(i, j - 1, dp)
    let result = up + left
    dp[i][j] = result
    return result
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    const rows = m;
    const columns = n;

    const dp = Array(rows).fill().map(() =>
        Array(columns).fill(-1));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 1
                continue
            }
            let up = i > 0 ? dp[i - 1][j] : 0
            let left = j > 0 ? dp[i][j - 1] : 0
            let result = up + left
            dp[i][j] = result
        }
    }
    return dp[m - 1][n - 1]
    // return solve(m - 1, n - 1, dp)
};

uniquePaths.run = () => {
    return console.log(uniquePaths(3, 7))
}
module.exports = uniquePaths