//@ts-check

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    let n = s.length
    let i = 0, j = 0, ans = 0
    let map = new Map()
    let maxFreq = 0
    while (j < n) {
        map.set(s[j], (map.get(s[j]) ?? 0) + 1)
        maxFreq = Math.max(maxFreq, map.get(s[j]))
        if (j - i + 1 - maxFreq > k) {
            map.set(s[i], map.get(s[i]) - 1)
            i++
        }
        if (j - i + 1 - maxFreq <= k)
            ans = Math.max(ans, j - i + 1)
        j++
    }
    return ans
};

characterReplacement.run = () => {
    characterReplacement("AABABBA", 1)
}

module.exports = characterReplacement