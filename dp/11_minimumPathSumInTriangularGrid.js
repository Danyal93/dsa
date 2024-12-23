//@ts-check

function solve(triangle, i, j, dp) {
    if (i === triangle.length - 1)
        return triangle[triangle.length - 1][j]
    if (dp[i][j] != -1) return dp[i][j]
    let downSum = triangle[i][j] + solve(triangle, i + 1, j, dp)
    let diagonalSum = triangle[i][j] + solve(triangle, i + 1, j + 1, dp)
    let result = Math.min(diagonalSum, downSum)
    dp[i][j] = result
    return result
}


/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    let n = triangle.length
    const dp = Array(n).fill(-1).map(() =>
        Array(n).fill(-1));

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            let downSum = triangle[i][j] + (i < n - 1 ? dp[i + 1][j] : 0)
            let diagonalSum = triangle[i][j] + (i < n - 1 ? dp[i + 1][j + 1] : 0)
            let result = Math.min(diagonalSum, downSum)
            dp[i][j] = result
        }
    }
    return dp[0][0]
    // let ans = solve(triangle, 0, 0, dp)
    // return ans
};

minimumTotal.run = () => {
    return console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
}
module.exports = minimumTotal