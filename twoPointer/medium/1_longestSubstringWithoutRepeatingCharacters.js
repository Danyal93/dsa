//@ts-check
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring1(s) {
    let str = s.split("")
    let n = str.length
    let i = 0, j = 0;
    let ans = 0
    let map = new Map()
    let add = true
    while (j < n) {
        if (add)
            map.set(str[j], (map.get(str[j]) ?? 0) + 1)
        if (i < j && map.get(str[j]) > 1) {
            map.set(str[i], map.get(str[i]) - 1)
            add = false
            i++
            continue
        }
        add = true
        ans = Math.max(ans, j - i + 1)
        j++
    }
    return ans
};
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let str = s.split("")
    let n = str.length
    let i = 0, j = 0;
    let ans = 0
    let map = new Map()
    while (j < n) {
        map.set(str[j], (map.get(str[j]) ?? 0) + 1)
        while (i < j && map.get(str[j]) > 1) {
            map.set(str[i], map.get(str[i]) - 1)
            i++
        }
        ans = Math.max(ans, j - i + 1)
        j++
    }
    return ans
};

lengthOfLongestSubstring.run = () => {
    lengthOfLongestSubstring("pwwkew")
}

module.exports = lengthOfLongestSubstring