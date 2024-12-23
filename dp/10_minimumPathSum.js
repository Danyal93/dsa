// @ts-check
function solve(grid, i, j, dp) {
    if (i === 0 && j === 0) return grid[0][0]
    if (i < 0 || j < 0) return Number.POSITIVE_INFINITY
    if (dp[i][j] != -1) return dp[i][j]
    let up = grid[i][j] + solve(grid, i - 1, j, dp)
    let left = grid[i][j] + solve(grid, i, j - 1, dp)
    let result = Math.min(up, left)
    dp[i][j] = result
    return result
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
    let m = grid.length
    let n = grid[0].length
    const dp = Array(m).fill(-1).map(() =>
        Array(n).fill(-1));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[0][0]
                continue
            }
            let up = i > 0 ? grid[i][j] + dp[i - 1][j] : Number.POSITIVE_INFINITY
            let left = j > 0 ? grid[i][j] + dp[i][j - 1] : Number.POSITIVE_INFINITY
            let result = Math.min(up, left)
            dp[i][j] = result
        }
    }
    return dp[m - 1][n - 1]
    // return solve(grid, m - 1, n - 1, dp)
};

minPathSum.run = () => {
    return console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
}
module.exports = minPathSum