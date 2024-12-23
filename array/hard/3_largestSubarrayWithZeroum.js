class Solution {
    maxLen(arr) {
        // code here
        let map = new Map()
        map.set(0, -1)
        let sum = 0, ans = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
            if (map.has(sum)) {
                ans = Math.max(ans, i - map.get(sum))
            }
            else {
                map.set(sum, i)
            }
        }
        return ans
    }
}

function largestSubarrayWithZeroSum() {
    let obj = new Solution()
    let ans = obj.maxLen([65, -4, 0, -43, 79, 46, -33, -23, 6, -4, 21, -29, -20, -5, 37, -47, 80, -79, -68, 42])
    console.log(ans)
}
largestSubarrayWithZeroSum.run = () => {
    largestSubarrayWithZeroSum()
}
module.exports = largestSubarrayWithZeroSum