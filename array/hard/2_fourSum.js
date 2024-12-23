//@ts-check

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    let n = nums.length
    let ans = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let k = j + 1, l = n - 1
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum == target) {
                    ans.push([nums[i], nums[j], nums[k], nums[l]])
                    while (k < l && nums[l] === nums[l - 1]) l--;
                    while (k < l && nums[k] === nums[k + 1]) k++;
                    k++
                    l--
                }
                else if (sum > target) l--;
                else k++;
            }
            while (j < n && nums[j] === nums[j + 1]) j++;
        }
        while (i < n && nums[i] === nums[i + 1]) i++;
    }
    return ans
};