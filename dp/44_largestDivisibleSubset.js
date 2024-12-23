//@ts-check


/**
 * @param {number[]} nums
 * @return {number[]}
 */
function largestDivisibleSubset(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b)
    let ans = 1
    let lis = []
    const dp = Array(n).fill(1)
    const indexTrackArray = Array.from({ length: n }, (n, i) => { return i })
    let maxIndex = 0
    for (let i = 0; i < n; i++) {
        for (let pre = 0; pre < i; pre++) {
            if (nums[i] % nums[pre] === 0 && dp[i] < dp[pre] + 1) {
                dp[i] = dp[pre] + 1
                indexTrackArray[i] = pre
            }
        }
        if (ans < dp[i]) {
            ans = dp[i]
            maxIndex = i
        }

    }
    let j = maxIndex
    lis.push(nums[j])
    while (indexTrackArray[j] != j) {
        j = indexTrackArray[j]
        lis.push(nums[j])
    }
    return lis.reverse()
};

largestDivisibleSubset.run = () => {
    largestDivisibleSubset([2, 3, 1, 4])
}
module.exports = largestDivisibleSubset