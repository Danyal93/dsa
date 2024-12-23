
//@ts-check
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let ans = 0, min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        ans = Math.max(ans, prices[i] - min)
        min = Math.min(min, prices[i])
    }
    return ans
};

function bestTimeToBuyAndSellStock1() { }
bestTimeToBuyAndSellStock1.run = function () {
    maxProfit([7, 1, 5, 3, 6, 4])
}

module.exports = bestTimeToBuyAndSellStock1