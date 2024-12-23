//@ts-check
class Solution {
    /**
    * @return {number}
    */
    solve(i, W, val, wt, dp) {
        if (i === 0) {
            return Math.floor(W / wt[i]) * val[i]
        }
        if (dp[i][W] !== undefined) return dp[i][W]
        let notPick = this.solve(i - 1, W, val, wt, dp)
        let pick = 0
        if (wt[i] <= W)
            pick = val[i] + this.solve(i, W - wt[i], val, wt, dp)
        let result = Math.max(notPick, pick)
        dp[i][W] = result
        return result
    }
    /**
     * @param {number} N
     * @param {number} W
     * @param {number[]} val
     * @param {number[]} wt
     * @return {number}
    */

    knapSack(N, W, val, wt) {
        //code here

        const dp = Array.from({ length: N }, () => Array(W + 1).fill(undefined));
        const ans = this.solve(N - 1, W, val, wt, dp);
        return ans
    }
}

function unboundedKnapSack() {
    let obj = new Solution();
    let ans = obj.knapSack(4, 8, [6, 1, 7, 7], [1, 3, 4, 5])
    return ans
}

unboundedKnapSack.run = function () {
    unboundedKnapSack()
}

module.exports = unboundedKnapSack