//@ts-check
/**
 * @param {number} _k
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(_k, prices) {
    let ans = 0, n = prices.length
    let K = _k
    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: 2 }, () => Array(K + 1).fill(0)));
    for (let i = n - 1; i >= 0; i--) {
        for (let buy = 0; buy <= 1; buy++) {
            for (let k = 1; k <= K; k++) {
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
    return dp[0][1][K]
};



function bestTimeToBuyAndSellStock3() { }
bestTimeToBuyAndSellStock3.run = function () {
    maxProfit(4, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0])
}

module.exports = bestTimeToBuyAndSellStock3