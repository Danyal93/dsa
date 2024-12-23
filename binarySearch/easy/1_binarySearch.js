//@ts-check
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let ans = -1
    let i = 0, n = nums.length, j = n - 1
    while (i <= j) {
        let mid = Math.floor((i + j) / 2)
        if (nums[mid] == target) {
            ans = mid
            break;
        }
        else if (nums[mid] > target) {
            j = mid - 1
        }
        else {
            i = mid + 1
        }
    }
    return ans
};