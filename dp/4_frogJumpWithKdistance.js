//@ts-check

function minimizeCost(k, arr) {
    let n = arr.length
    let dp = new Array(n + 1).fill(-1)
    dp[0] = 0
    for (let index = 1; index < n; index++) {
        let minVal = Number.MAX_VALUE
        for (let j = 1; j <= k; j++) {
            if (index - j >= 0)
                minVal = Math.min(minVal, dp[index - j] + + Math.abs(arr[index] - arr[index - j]))
        }
        dp[index] = minVal
    }

    return dp[n - 1]
}

minimizeCost.run = () => {
    minimizeCost(3, [10, 30, 40, 50, 20])
}

module.exports = minimizeCost