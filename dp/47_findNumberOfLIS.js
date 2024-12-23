//@ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumberOfLIS(nums) {
    let n = nums.length
    let maxLength = 1
    let lis = []
    const dp = Array(n).fill(1)
    const count = Array(n).fill(1)
    let maxIndex = 0
    for (let i = 0; i < n; i++) {
        for (let pre = 0; pre < i; pre++) {
            if (nums[pre] < nums[i] && dp[i] < dp[pre] + 1) {
                dp[i] = dp[pre] + 1
                count[i] = count[pre]
            }
            else if (nums[pre] < nums[i] && dp[i] == dp[pre] + 1) {
                count[i] += count[pre]
            }
        }
        if (maxLength < dp[i]) {
            maxLength = dp[i]
            maxIndex = i
        }
    }
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (dp[i] === dp[maxIndex])
            ans += count[i]
    }
    return ans
};


findNumberOfLIS.run = () => {
    findNumberOfLIS([1, 3, 5, 4, 7])
}


module.exports = findNumberOfLIS