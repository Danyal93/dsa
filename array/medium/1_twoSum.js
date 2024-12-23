/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let map = new Map()
    let n = nums.length
    let ans = [-1, -1]
    for (let i = 0; i < n; i++) {
        if (map.has(target - nums[i])) {
            let pre = map.get(target - nums[i])
            ans[0] = pre
            ans[1] = i
        }
        map.set(nums[i], i)
    }
    return ans
};
twoSum.run = () => {
    twoSum([2, 7, 11, 15], 9)
}
module.exports = twoSum