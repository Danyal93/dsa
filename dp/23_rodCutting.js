//@ts-check
class Solution {
    solve(price, index, n, dp) {
        // base case
        if (index === 0) {
            return n * price[0];
        }
        if (dp[index][n] !== undefined)
            return dp[index][n];

        // At any index we have 2 options either
        // cut the rod of this length or not cut
        // it
        let notCut = this.solve(price, index - 1, n, dp);
        let cut = Number.MIN_SAFE_INTEGER;
        let rod_length = index + 1;

        if (rod_length <= n)
            cut = price[index] + this.solve(price, index, n - rod_length, dp);

        return dp[index][n] = Math.max(notCut, cut);
    }
    //Function to find the maximum possible value of the function.
    cutRod(price, n) {
        //your code here
        const dp = Array.from({ length: n }, () => Array(n + 1).fill(undefined));
        return this.solve(price, n - 1, n, dp)

    }
}

function rodCutting() {
    let obj = new Solution();
    let ans = obj.cutRod([1, 5, 8, 9, 10, 17, 17, 20], 8)
    return ans
}

rodCutting.run = function () {
    rodCutting()
}

module.exports = rodCutting