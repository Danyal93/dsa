// @ts-check


function solve(matrix, i, j, dp) {
    if (j < 0 || j >= matrix[0].length) return Number.MAX_VALUE;
    if (i === 0) return matrix[i][j]
    if (dp[i][j] != undefined) return dp[i][j]
    let diagonalLeft = matrix[i][j] + solve(matrix, i - 1, j - 1, dp)
    let up = matrix[i][j] + solve(matrix, i - 1, j, dp)
    let diagonalRight = matrix[i][j] + solve(matrix, i - 1, j + 1, dp)
    let result = Math.min(diagonalLeft, diagonalRight, up)
    dp[i][j] = result
    return result
}

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function minFallingPathSum(matrix) {
    let ans = Number.MAX_VALUE
    let n = matrix.length
    const dp = Array(n).fill(-1).map(() =>
        Array(n).fill(undefined));
    for (let i = 0; i < n; i++) {
        let curr = solve(matrix, n - 1, i, dp)
        ans = Math.min(ans, curr)
    }
    return ans
};

minFallingPathSum.run = () => {
    return console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]))
}
module.exports = minFallingPathSum