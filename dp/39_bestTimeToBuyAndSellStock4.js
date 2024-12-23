
//@ts-check
/**
 * 
 * @param {number[]} prices 
 * @param {number} i 
 * @param {number} buy 
 * @param {any[][]} dp 
 * @returns 
 */
function solve(prices, i, buy, dp) {
    if (i >= prices.length) return 0
    if (dp[i][buy] != undefined) return dp[i][buy]
    let res
    if (buy) {
        let buyStock = -prices[i] + solve(prices, i + 1, 0, dp)
        let notBuyStock = solve(prices, i + 1, 1, dp)
        res = Math.max(buyStock, notBuyStock)

    }
    else {
        let sellStock = prices[i] + solve(prices, i + 2, 1, dp)
        let notSellStock = solve(prices, i + 1, 0, dp)
        res = Math.max(sellStock, notSellStock)
    }
    return dp[i][buy] = res
}

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let ans = 0, n = prices.length
    // const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));
    // for (let i = n - 1; i >= 0; i--) {
    //     for (let buy = 0; buy <= 1; buy++) {
    //         let res
    //         if (buy) {
    //             let buyStock = -prices[i] + dp[i + 1][0]
    //             let notBuyStock = dp[i + 1][1]
    //             res = Math.max(buyStock, notBuyStock)

    //         }
    //         else {
    //             let sellStock = prices[i] + dp[i + 1][1]
    //             let notSellStock = dp[i + 1][0]
    //             res = Math.max(sellStock, notSellStock)
    //         }
    //         dp[i][buy] = res
    //     }
    // }
    // return dp[0][1]
    const dp = Array.from({ length: n }, () => Array(2).fill(undefined));
    ans = solve(prices, 0, 1, dp)
    return ans
};



function bestTimeToBuyAndSellStock4() { }
bestTimeToBuyAndSellStock4.run = function () {
    maxProfit([1, 2, 3, 0, 2])
}

module.exports = bestTimeToBuyAndSellStock4