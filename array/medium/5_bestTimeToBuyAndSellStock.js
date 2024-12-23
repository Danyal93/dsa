//@ts-check
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let n = prices.length;
    let min = prices[0]
    let ans = 0
    for (let i = 1; i < n; i++) {
        min = Math.min(min, prices[i]);
        ans = Math.max(ans, prices[i] - min);
    }
    return ans
};


/* 
    Example 1:
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

*/