// @ts-check

function solve(obstacleGrid, i, j, dp) {
    if (i < 0 || j < 0) return 0
    if (obstacleGrid[i][j] == 1) return 0
    if (i === 0 && j === 0) return 1
    if (dp[i][j] != -1) return dp[i][j]
    let up = solve(obstacleGrid, i - 1, j, dp)
    let left = solve(obstacleGrid, i, j - 1, dp)
    let result = up + left
    dp[i][j] = result
    return result
}

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    const rows = m;
    const columns = n;

    const dp = Array(rows).fill(-1).map(() =>
        Array(columns).fill(-1));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[i][j] = 0
                continue
            }
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
    // return solve(obstacleGrid, m - 1, n - 1, dp)
};

uniquePathsWithObstacles.run = () => {
    return console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
}
module.exports = uniquePathsWithObstacles