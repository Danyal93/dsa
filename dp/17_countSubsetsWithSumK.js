//@ts-check

class Solution {
    /**
     * @param {number[]} arr
     * @param {number} i
     * @param {number} target
     * @param {number[][]} dp
     * @return {number} 
    */
    solve(arr, i, target, dp) {
        if (target === 0) return 1
        if (i === 0) return arr[i] == target ? 1 : 0
        if (dp[i][target] != undefined) return dp[i][target]
        let pick = 0
        if (target >= arr[i])
            pick = this.solve(arr, i - 1, target - arr[i], dp)
        let nonPick = this.solve(arr, i - 1, target, dp)
        let result = pick + nonPick
        dp[i][target] = result
        return result
    }
    /**
     * @param {number[]} arr
     * @param {number} n
     * @param {number} sum
     * @return {number}
    */
    perfectSum(arr, n, sum) {
        //code here
        let ans = 0
        const dp = Array(n).fill(-1).map(() =>
            Array(sum + 1).fill(undefined));
        ans = this.solve(arr, n-1, sum, dp)
        return ans
    }
}


function countSubsetWithSumK() {
    let obj = new Solution();
    let ans = obj.perfectSum([5, 2, 3, 10, 6, 8], 6, 10)
    return ans
}

countSubsetWithSumK.run = () => {
    countSubsetWithSumK()
}

module.exports = countSubsetWithSumK