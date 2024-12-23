//@ts-check
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    // find ceil
    let n = nums.length
    let i = 0, j = n - 1, ans = n
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] >= target) {
            ans = mid;
            j = mid - 1
        }
        else {
            i = mid + 1
        }
    }
    return ans
};