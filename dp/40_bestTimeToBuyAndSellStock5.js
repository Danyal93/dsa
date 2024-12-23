
//@ts-check
/**
 * 
 * @param {number[]} prices 
 * @param {number} i 
 * @param {number} buy 
 * @param {number} fee
 * @param {any[][]} dp 
 * @returns 
 */
function solve(prices, i, buy, fee, dp) {
    if (i === prices.length) return 0
    if (dp[i][buy] != undefined) return dp[i][buy]
    let res
    if (buy) {
        let buyStock = -fee - prices[i] + solve(prices, i + 1, 0, fee, dp)
        let notBuyStock = solve(prices, i + 1, 1, fee, dp)
        res = Math.max(buyStock, notBuyStock)

    }
    else {
        let sellStock = prices[i] + solve(prices, i + 1, 1, fee, dp)
        let notSellStock = solve(prices, i + 1, 0, fee, dp)
        res = Math.max(sellStock, notSellStock)
    }
    return dp[i][buy] = res
}

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
    let ans = 0, n = prices.length
    const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        for (let buy = 0; buy <= 1; buy++) {
            let res
            if (buy) {
                let buyStock = - fee - prices[i] + dp[i + 1][0]
                let notBuyStock = dp[i + 1][1]
                res = Math.max(buyStock, notBuyStock)

            }
            else {
                let sellStock = prices[i] + dp[i + 1][1]
                let notSellStock = dp[i + 1][0]
                res = Math.max(sellStock, notSellStock)
            }
            dp[i][buy] = res
        }
    }
    return dp[0][1]
    // const dp = Array.from({ length: n }, () => Array(2).fill(undefined));
    // ans = solve(prices, 0, 1, fee, dp)
    // return ans
};

function bestTimeToBuyAndSellStock5() { }
bestTimeToBuyAndSellStock5.run = function () {
    maxProfit([1, 3, 2, 8, 4, 9], 2)
}

module.exports = bestTimeToBuyAndSellStock5