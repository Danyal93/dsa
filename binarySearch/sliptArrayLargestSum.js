//@ts-check
/**
 * @param {number[]} nums
 * @param {number} k
 * * @param {number} cap
 * @return {boolean}
 */

function canSpit(nums, k, cap) {
    let result = false, count = 0, crr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (crr + nums[i] > cap) {
            count++;
            crr = 0
        }
        crr += nums[i]
    }
    if (crr <= cap) {
        count++
    }
    if (count <= k)
        result = true
    return result
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function splitArray(nums, k) {
    let ans = 0
    let n = nums.length
    let l = -1, r = 0
    for (let i = 0; i < n; i++) {
        l = Math.max(l, nums[i])
        r += nums[i]
    }

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (canSpit(nums, k, mid)) {
            ans =mid
            r = mid - 1
        }
        else {
            l = mid + 1
        }
    }

    return ans
};

splitArray.run = () => {
    splitArray([7, 2, 5, 10, 8], 2)
}

module.exports = splitArray