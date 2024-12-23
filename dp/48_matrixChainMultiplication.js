//@ts-check

function solve(arr, i, j, dp) {

    // base condition
    if (i == j)
        return 0;

    if (dp[i][j] != undefined)
        return dp[i][j];

    let mini = Number.MAX_VALUE;

    // partioning loop
    for (let k = i; k <= j - 1; k++) {

        let ans = solve(arr, i, k, dp) + solve(arr, k + 1, j, dp) + arr[i - 1] * arr[k] * arr[j];

        mini = Math.min(mini, ans);

    }

    return mini;
}


function matrixMultiplication(arr) {

    const n = arr.length
    const dp = Array.from({ length: n }, () => Array(n).fill(-1))

    // Initialize the diagonal elements of the DP table to 0
    for (let i = 0; i < n; i++) {
        dp[i][i] = 0;
    }

    // Loop for the length of the chain
    for (let len = 2; len < n; len++) {
        for (let i = 1; i < n - len + 1; i++) {
            let j = i + len - 1;
            dp[i][j] = Number.MAX_VALUE;;

            for (let k = i; k < j; k++) {
                let cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }

    return dp[1][n - 1];
    // const dp = Array.from({ length: n }, () => Array(n).fill(undefined))
    // return solve(arr, 1, n - 1, dp);
}
