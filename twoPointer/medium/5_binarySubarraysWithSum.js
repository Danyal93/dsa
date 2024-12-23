//@ts-check
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithAtleatSum(nums, goal) {
    let ans = 0, i = 0, j = 0, n = nums.length, sum = 0
    while (j < n) {
        sum = sum + nums[j]
        while (i< j && sum > goal) {
            sum = sum - nums[i]
            i++
        }
        if (sum <= goal)
            ans += j - i + 1
        j++
    }
    return ans
}
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithSum(nums, goal) {
    return numSubarraysWithAtleatSum(nums, goal) - numSubarraysWithAtleatSum(nums, goal - 1);
};

numSubarraysWithSum.run = () => {
    console.log(numSubarraysWithSum([0,0,0,0,0,0,1,0,0,0], 0))
}
module.exports = numSubarraysWithSum