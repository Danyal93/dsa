//@ts-check
function solve(i, j, cuts, dp) {
    if (i > j) return 0;
    if (dp[i][j] !== -1) return dp[i][j];

    let mini = Infinity;
    for (let ind = i; ind <= j; ind++) {
        const steps = cuts[j + 1] - cuts[i - 1]
            + solve(i, ind - 1, cuts, dp)
            + solve(ind + 1, j, cuts, dp);
        mini = Math.min(mini, steps);
    }

    return dp[i][j] = mini;
}

function minCost(n, cuts) {
    const C = cuts.length;
    const temp = [];
    temp.push(0);
    temp.push(...cuts);
    temp.push(n);
    temp.sort((a, b) => a - b);

    const dp = new Array(C + 1).fill(-1).map(() => new Array(C + 1).fill(-1));

    return solve(1, C, temp, dp);
};


function minimumCostToCutTheStick() {
    minCost(7, [1, 3, 4, 5])
}
minimumCostToCutTheStick.run = function () {
    minimumCostToCutTheStick()
}
module.exports = minimumCostToCutTheStick