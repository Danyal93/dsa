// @ts-check

function canSpit(nums, k, cap) {
    let result = false, count = 1, crr = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - crr >= cap) {
            count++;
            crr = nums[i]
        }
    }
    if (count >= k)
        result = true
    return result
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxDistance(nums, k) {
    let ans = 0
    nums.sort((a, b) => a-b)
    let n = nums.length
    let l = 1, r = 0
    for (let i = 0; i < n; i++) {
        r = Math.max(r, nums[i])
    }

    while (l <= r) {
        let mid = l + Math.floor((r- l) / 2)
        if (canSpit(nums, k, mid)) {
            ans = mid
            l = mid + 1
        }
        else {
            r = mid - 1

        }
    }

    return ans
};

maxDistance.run = () => {
    maxDistance([5,4,3,2,1,1000000000], 2)

}



module.exports = maxDistance