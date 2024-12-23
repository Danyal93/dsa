//@ts-check

class Solution {
    solve(arr, i, sum, dp) {
        if (sum == 0) return true
        if (i === 0) return arr[i] == sum
        if (dp[i][sum] != -1) return dp[i][sum]
        let pick = arr[i] <= sum ? this.solve(arr, i - 1, sum - arr[i], dp) : 0
        let notPick = this.solve(arr, i - 1, sum, dp)

        let result = pick || notPick
        dp[i][sum] = result
        return result
    }
    isSubsetSum(arr, sum) {
        // code here
        let n = arr.length;
        const dp = Array(n).fill(-1).map(() =>
            Array(sum + 1).fill(-1));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < sum + 1; j++) {
                if (j == 0) {
                    dp[i][j] = true;
                    continue;
                }
                if (i === 0) {
                    dp[i][j] = arr[i] == j
                    continue;
                }
                let pick = arr[i] <= j ? dp[i - 1][j - arr[i]] : 0
                let notPick = dp[i - 1][j]

                let result = pick || notPick
                dp[i][j] = result
            }
        }
        return dp[n - 1][sum]
        // return this.solve(arr, n - 1, sum, dp)
    }
}

function subsetSumProblem() {
    let obj = new Solution();
    let ans = obj.isSubsetSum([3, 34, 4, 12, 5, 2], 9)
    return ans
}

subsetSumProblem.run = () => {
    subsetSumProblem()
}

module.exports = subsetSumProblem