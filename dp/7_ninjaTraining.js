class Solution {

    solve(arr, index, last, dp) {
        if (index === -1)
            return 0
        if (dp[index][last] != -1) return dp[index][last]
        let maxi = -1
        for (let i = 0; i < 3; i++) {
            if (i != last)
                maxi = Math.max(maxi, arr[index][i] + this.solve(arr, index - 1, i, dp))
        }
        dp[index][last] = maxi
        return dp[index][last]
    }


    // Function to find the maximum points among all the possible ones.
    maximumPoints(arr, n) {
        // your code here
        const rows = n;
        const columns = 4;

        const dp = Array(rows).fill().map(() =>
            Array(columns).fill(-1));
        for (let index = 0; index < n; index++) {
            for (let last = 0; last < 4; last++) {
                let maxi = -1
                for (let i = 0; i < 3; i++) {
                    if (i != last)
                        maxi = Math.max(maxi, arr[index][i] + (index > 0 ? dp[index - 1][i] : 0))
                }
                dp[index][last] = maxi
            }

        }
        return dp[n - 1][3]
        // return this.solve(arr, n - 1, 3, dp)
    }
}

function ninjaTraining(arr, n) {
    let obj = new Solution()
    let ans = obj.maximumPoints(arr, n)
    return ans
}

ninjaTraining.run = function () {
    ninjaTraining(
        [
            [1, 2, 5],
            [3, 1, 1],
            [3, 3, 3]],
        3)
}

module.exports = ninjaTraining