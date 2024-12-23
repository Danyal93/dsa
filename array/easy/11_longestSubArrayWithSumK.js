//@ts-check
class Solution {

    /**
     * @param {number[]} arr
     * @param {number} k
     * @returns {number}
     */
    lenOfLongestSubarrWithSumK(arr, k) {
        // code here
        let ans = -1
        let n = arr.length
        let pre = 0
        let map = new Map()
        map.set(0, -1)
        for (let i = 0; i < n; i++) {
            pre += arr[i]
            if (map.has(pre - k)) {
                ans = Math.max(ans, i - map.get(pre - k))
            }
            if (!map.has(pre)) {
                map.set(pre, i)
            }
        }

        return ans
    }
}

function lenOfLongestSubarrWithSumK(arr, k) {
    let obj = new Solution()
    let ans = obj.lenOfLongestSubarrWithSumK(arr, k)
    return ans
}
lenOfLongestSubarrWithSumK.run = () => {
    lenOfLongestSubarrWithSumK([10, 5, 2, 7, 1, 9], 15)
}
module.exports = lenOfLongestSubarrWithSumK