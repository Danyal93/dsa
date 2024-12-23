// @ts-check
function isSubSet(nums, sum) {
    let n = nums.length;
    const dp = Array(n).fill(-1).map(() =>
        Array(sum + 1).fill(-1));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (j == 0) {
                dp[i][j] = true;
                continue;
            }
            if (i === 0) {
                dp[i][j] = nums[i] == j
                continue;
            }
            let pick = nums[i] <= j ? dp[i - 1][j - nums[i]] : 0
            let notPick = dp[i - 1][j]

            let result = pick || notPick
            dp[i][j] = result
        }
    }
    return dp[n - 1][sum]
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
    let totalSum = 0
    nums.forEach((num) => totalSum += num)
    if (totalSum % 2 != 0) return false
    let sum = totalSum / 2
    return isSubSet(nums, sum)
};

canPartition.run = () => {
    console.log(canPartition([1, 5, 11, 5]))
}

module.exports = canPartition