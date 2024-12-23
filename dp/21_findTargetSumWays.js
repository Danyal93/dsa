// @ts-check
// Important, I missed the case for taking positive in all condition , 
// and I taked, posive =0 , if(target >=nums[i]) positive = solve()
function solve(nums, i, target, dp) {
    // Base case: when we are at the first element (i === 0)
    if (i === 0) {
        // Check if we can achieve the target with +nums[0] or -nums[0]
        if (target === 0 && nums[i] === 0)
            return 2
        return nums[i] === Math.abs(target) ? 1 : 0
    }

    // Check if the result is already computed
    if (dp[i][target + 1000] !== undefined) {
        return dp[i][target + 1000];
    }

    // Recursively calculate the number of ways to form the target
    let positive = solve(nums, i - 1, target - nums[i], dp);
    let negative = solve(nums, i - 1, target + nums[i], dp);

    // Store the result and return it
    dp[i][target + 1000] = positive + negative;
    return dp[i][target + 1000];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
    const n = nums.length;
    // Initialize dp array with undefined values
    const dp = Array.from({ length: n }, () => Array(2001).fill(undefined));
    return solve(nums, n - 1, target, dp);
};





findTargetSumWays.run = () => {
    return console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1))
}
module.exports = findTargetSumWays