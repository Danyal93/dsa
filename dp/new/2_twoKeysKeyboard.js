//@ts-check

function solve(n, i, copyCount, dp) {
    if (i > n) return Number.MAX_VALUE
    if (n === i)
        return 0
    if (dp[i][copyCount] != undefined) return dp[i][copyCount]
    let copy = Number.MAX_VALUE, paste = Number.MAX_VALUE
    if (copyCount !== i)
        copy = 1 + solve(n, i, i, dp)
    if (copyCount !== 0)
        paste = 1 + solve(n, i + copyCount, copyCount, dp)
    let res = Math.min(copy, paste)
    dp[i][copyCount] = res
    return res
}

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(undefined));
    return solve(n, 1, 0, dp)
};


function twoKeysKeyboard() {

}


twoKeysKeyboard.run = () => {
    return console.log(minSteps(3))
}
module.exports = twoKeysKeyboard