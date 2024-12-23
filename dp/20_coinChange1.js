//@ts-check
function solve(coins, i, amount, dp) {
    if (amount === 0) return 0
    if (i === 0) {
        if (amount % coins[i] === 0)
            return amount / coins[i]
        else
            return Number.MAX_VALUE
    }
    if (dp[i][amount] != undefined) return dp[i][amount]
    let notPick = solve(coins, i - 1, amount, dp)
    let pick = Number.MAX_VALUE
    if (coins[i] <= amount)
        pick = 1 + solve(coins, i, amount - coins[i], dp)
    let result = Math.min(notPick, pick)
    dp[i][amount] = result
    return result
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    const n = coins.length
    const dp = Array(coins.length).fill(-1).map(() =>
        Array(amount + 1).fill(undefined));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= amount; j++) {
            if (j === 0) {
                dp[i][j] = 0
                continue
            }
            if (i === 0) {
                if (j % coins[i] === 0) {
                    dp[i][j] = j / coins[i]
                    continue
                }
                else {
                    dp[i][j] = Number.MAX_VALUE
                    continue
                }
            }
            let notPick = dp[i - 1][j]
            let pick = Number.MAX_VALUE
            if (coins[i] <= j)
                pick = 1 + dp[i][j - coins[i]]
            let result = Math.min(notPick, pick)
            dp[i][j] = result
        }
    }


    let ans = dp[n - 1][amount]
    // let ans =  solve(coins, n - 1, amount, dp)
    return Number.MAX_VALUE <= ans ? -1 : ans
};


coinChange.run = () => {
    console.log(coinChange([4, 6, 8, 2], 22))
}

module.exports = coinChange