//@ts-check

function solve(i, n, days, costs, dp) {
    function nextIndex(unit) {
        let d = i
        while (d < n && days[i] + unit > days[d]) {
            d++
        }
        return d
    }
    if (i >= n) return 0
    if (dp[i] != undefined) return dp[i]
    let oneDayTicket = costs[0] + solve(nextIndex(1), n, days, costs, dp)
    let sevenDaysTicket = costs[1] + solve(nextIndex(7), n, days, costs, dp)
    let thirtyDaysTicket = costs[2] + solve(nextIndex(30), n, days, costs, dp)
    let res = Math.min(oneDayTicket, sevenDaysTicket, thirtyDaysTicket)
    dp[i] = res
    return res
}
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function mincostTickets(days, costs) {
    let n = days.length
    const dp = Array(n).fill(undefined)
    let ans = solve(0, n, days, costs, dp)
    console.log(ans)
    return ans
};

mincostTickets.run = () => {
    mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])
}
module.exports = mincostTickets