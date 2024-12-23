//@ts-check
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    let ans = []
    let n = nums.length
    nums.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        let j = i + 1, k = n - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum == 0) {
                ans.push([nums[i], nums[j], nums[k]])
                while (j < k && nums[k] === nums[k - 1]) k--;
                while (j < k && nums[j] === nums[j + 1]) j++;
                j++
                k--
            }
            else if (sum > 0) k--;
            else j++;
        }
        while (i < n && nums[i] === nums[i + 1]) i++;
    }
    return ans
};