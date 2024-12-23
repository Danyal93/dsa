//@ts-check

/**
 * @param {string} s
 * @return {number}
 */
function numberOfSubstrings(s) {
    let map = new Map();
    let i = 0, j = 0, ans = 0, n = s.length;
    while (j < n) {
        map.set(s[j], (map.get(s[j]) ?? 0) + 1)
        while (map.get('a') > 0 && map.get('b') > 0 && map.get('c') > 0) {
            if (map.get(s[i]) === 1)
                break
            map.set(s[i], map.get(s[i]) - 1)
            i++
        }
        if (map.get('a') > 0 && map.get('b') > 0 && map.get('c') > 0)
            ans += i + 1
        j++
    }
    return ans
};

function numberOfSubstringsContainingAllThreeCharacters() {
}

numberOfSubstringsContainingAllThreeCharacters.run = () => {
    numberOfSubstrings("ababbbc")
}

module.exports = numberOfSubstringsContainingAllThreeCharacters