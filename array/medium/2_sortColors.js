//@ts-check
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColorsTwoPass = function (nums) {
    let n = nums.length
    let z = 0, t = n - 1
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            [[nums[z]], nums[i]] = [[nums[i]], nums[z]];
            z++
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] === 2) {
            [[nums[t]], nums[i]] = [[nums[i]], nums[t]];
            t--
        }
    }
};

//@ts-check
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let n = nums.length
    let z = 0, mid = 0, t = n - 1

    while (mid <= t) {
        if (nums[mid] === 0) {
            [[nums[z]], nums[mid]] = [[nums[mid]], nums[z]];
            z++;
            mid++;
        }
        else if (nums[mid] === 1) {
            mid++;
        }
        else {
            [[nums[t]], nums[mid]] = [[nums[mid]], nums[t]];
            t--
        }
    }

};