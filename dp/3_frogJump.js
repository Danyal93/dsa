//@ts-check

/**
 * 
 * @param {[Number]} height 
 * @param {Number} index 
 * @param {[Number]} dp 
 * @returns 
 */


function solve(height, index, dp) {
    if (index === 0) return 0
    if (dp[index] != -1) return dp[index]
    let oneStep = solve(height, index - 1, dp) + Math.abs(height[index] - height[index - 1])
    if (index <= 1) {
        dp[index] = oneStep
        return dp[index]
    }

    let twoStep = solve(height, index - 2, dp) + Math.abs(height[index] - height[index - 2])
    dp[index] = Math.min(twoStep, oneStep)
    return dp[index]
}

function minimumEnergy(height, n) {
    let dp = new Array(n + 1).fill(-1)
    dp[0] = 0
    for (let index = 1; index < n; index++) {
        let oneStep = dp[index - 1] + Math.abs(height[index] - height[index - 1])
        if (index <= 1) {
            dp[index] = oneStep
            continue
        }
        let twoStep = dp[index - 2] + Math.abs(height[index] - height[index - 2])
        dp[index] = Math.min(twoStep, oneStep)
    }

    return dp[n - 1]
    // @ts-ignore
    // return solve(height, n - 1, dp)
}

minimumEnergy.run = () => {
    minimumEnergy([10, 20, 30, 10], 4)
}

module.exports = minimumEnergy