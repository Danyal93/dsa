//@ts-check
/**
 * @param {string} words1
 * @param {string} words2
 * @return {boolean}
 */
function checkOneWordDiff(words1, words2) {
    let n = words1.length, m = words2.length
    if (n != m + 1) return false
    let i = 0, j = 0
    while (i < n && j < m) {
        if (words1[i] == words2[j]) {
            i++
            j++
        }
        else {
            i++
        }
    }
    if (i == n && j == m) return true
    if (j >= m && i == n-1) return true
    // abc ab
    return false
}
/**
 * @param {string[]} words
 * @return {number}
 */
function longestStrChain(words) {
    let n = words.length;
    words.sort((a, b) => a.length - b.length)
    let ans = 1
    const dp = Array(n).fill(1)

    for (let i = 0; i < n; i++) {
        for (let pre = 0; pre < i; pre++) {
            if (checkOneWordDiff(words[i], words[pre]) && dp[i] < dp[pre] + 1) {
                dp[i] = dp[pre] + 1
            }
        }
        if (ans < dp[i]) {
            ans = dp[i]
        }

    }

    return ans
};

longestStrChain.run = () => {
    longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"])
}

module.exports = longestStrChain