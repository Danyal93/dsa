
//@ts-check
/**
 * 
 * @param {number[]} prices 
 * @param {number} i 
 * @param {number} buy 
 * @param {number} k
 * @param {any[][]} dp 
 * @returns 
 */
function solve(prices, i, buy, k, dp) {
    if (i === prices.length) return 0
    if (k === 0) return 0
    if (dp[i][buy][k] != undefined) return dp[i][buy][k]
    let res
    if (buy) {
        let buyStock = -prices[i] + solve(prices, i + 1, 0, k, dp)
        let notBuyStock = solve(prices, i + 1, 1, k, dp)
        res = Math.max(buyStock, notBuyStock)

    }
    else {
        let sellStock = prices[i] + solve(prices, i + 1, 1, k - 1, dp)
        let notSellStock = solve(prices, i + 1, 0, k, dp)
        res = Math.max(sellStock, notSellStock)
    }
    return dp[i][buy][k] = res
}

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let ans = 0, n = prices.length
    let K = 2
    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: 2 }, () => Array(K + 1).fill(0)));
    for (let i = n - 1; i >= 0; i--) {
        for (let buy = 0; buy <= 1; buy++) {
            for (let k = 1; k <= 2; k++) {
                let res
                if (buy) {
                    let buyStock = -prices[i] + dp[i + 1][0][k]
                    let notBuyStock = dp[i + 1][1][k]
                    res = Math.max(buyStock, notBuyStock)

                }
                else {
                    let sellStock = prices[i] + dp[i + 1][1][k - 1]
                    let notSellStock = dp[i + 1][0][k]
                    res = Math.max(sellStock, notSellStock)
                }
                dp[i][buy][k] = res
            }
        }
    }
    return dp[0][1][2]
    // const dp = Array.from({ length: n }, () =>
    //     Array.from({ length: 2 }, () => Array(k + 1).fill(undefined)));
    // ans = solve(prices, 0, 1, 2, dp)
    // return ans
};

function bestTimeToBuyAndSellStock3() { }
bestTimeToBuyAndSellStock3.run = function () {
    maxProfit([2, 1, 4, 5, 2, 9, 7])
}

module.exports = bestTimeToBuyAndSellStock3