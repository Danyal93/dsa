//@ts-check


function reverse(nums, l, r) {
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    let n = nums.length
    let kn = k % n
    reverse(nums, 0, n - kn - 1)
    reverse(nums, n - kn, n - 1)
    reverse(nums, 0, n - 1)

};