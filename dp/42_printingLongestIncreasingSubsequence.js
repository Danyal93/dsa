//@ts-check

class Solution {
    /**
    * @param {number} n
    * @param {number[]} arr
    * @returns {number[]}
    */
    longestIncreasingSubsequence(n, arr) {
        // code here
        let ans = 1
        let lis = []
        const dp = Array(n).fill(1)
        const indexTrackArray = Array.from({ length: n }, (n, i) => { return i })
        let maxIndex = 0
        for (let i = 0; i < n; i++) {
            for (let pre = 0; pre < i; pre++) {
                if (arr[pre] < arr[i] && dp[i] < dp[pre] + 1) {
                    dp[i] = dp[pre] + 1
                    indexTrackArray[i] = pre
                }
            }
            if (ans < dp[i]) {
                ans = dp[i]
                maxIndex = i
            }

        }
        let j = maxIndex
        lis.push(arr[j])
        while (indexTrackArray[j] != j) {
            j = indexTrackArray[j]
            lis.push(arr[j])
        }
        return lis.reverse()
    }
}
function printLongestIncreasingSubsequence() {
    let obj = new Solution()
    let ans = obj.longestIncreasingSubsequence(4, [3, 1, 5, 2])
}

printLongestIncreasingSubsequence.run = () => {
    printLongestIncreasingSubsequence()
}
module.exports = printLongestIncreasingSubsequence