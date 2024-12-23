//@ts-check

class Solution {

    lis(nums) {
        let n = nums.length
        const dp = Array(n).fill(1)
        for (let i = 0; i < n; i++) {
            for (let pre = 0; pre < i; pre++) {
                if (nums[pre] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[pre] + 1)
                }
            }
        }
        return dp
    }


    /**
    * @param {number} n
    * @param {number[]} nums

    * @returns number
    */
    LongestBitonicSequence(n, nums) {
        // code here
        const lis = this.lis(nums)
        const lds = this.lis(nums.reverse())
        let ans = 0
        for (let i = 0; i < n; i++) {
            if (lis[i] > 1 && lds[n - i - 1] > 1)
                ans = Math.max(ans, lis[i] + lds[n - i - 1] - 1)
        }
        return ans
    }
}


function longestBitonicSequence() {
    let obj = new Solution()
    let ans = obj.LongestBitonicSequence(5, [1, 2, 5, 3, 2])
    return ans
}
longestBitonicSequence.run = () => {
    longestBitonicSequence()
}
module.exports = longestBitonicSequence