//@ts-check
function solve(s, p, i, j, dp) {
    if (i < 0 && j < 0) return true
    if (j < 0 && i >= 0) return false;
    if (i < 0) {
        for (let _j = j; _j >= 0; _j--) {
            if (p[_j] != '*') {
                return false
            }
        }
        return true
    }
    if(dp[i][j] != undefined) return dp[i][j]
    if (s[i] == p[j] || p[j] == '?') {
        return dp[i][j] = solve(s, p, i - 1, j - 1, dp)
    }
    if (p[j] == '*') {
        return dp[i][j] = solve(s, p, i - 1, j, dp) || solve(s, p, i, j - 1, dp)
    }
    return dp[i][j] = false
}


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    let n = s.length, m = p.length
    const dp = Array.from({ length: n }, () => Array(m).fill(undefined));
    return solve(s, p, n - 1, m - 1, dp)
};
function wildCardMatching() {

}

wildCardMatching.run = () => {
    isMatch("a", "c*")
}


module.exports = wildCardMatching