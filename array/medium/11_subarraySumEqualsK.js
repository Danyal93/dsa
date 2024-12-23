//@ts-check
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function subarraySum(nums, k) {
    let map = new Map()
    map.set(0, 1)
    let ans = 0, sum = 0, n = nums.length
    for (let i = 0; i < n; i++) {
        sum += nums[i]
        if (map.has(sum - k)) {
            ans += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) ?? 0) + 1)
    }
    return ans
};