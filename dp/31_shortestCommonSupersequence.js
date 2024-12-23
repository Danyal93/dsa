//@ts-check

/**
* @param {string} str1
* @param {string} str2
* @return {string}
*/
function shortestCommonSupersequence(str1, str2) {
    const n = str1.length, m = str2.length
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(undefined));
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0
                continue
            }
            if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
                continue
            }
            let reduceI = dp[i - 1][j]
            let reduceJ = dp[i][j - 1]
            let result = Math.max(reduceI, reduceJ)
            dp[i][j] = result
        }
    }

    let len = dp[n][m];
    let i = n;
    let j = m;

    let index = len - 1;
    let ans = "";

    while (i > 0 && j > 0) {
        if (str1[i - 1] == str2[j - 1]) {
            ans += str1[i - 1];
            index--;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            ans += str1[i - 1];
            i--;
        } else {
            ans += str2[j - 1];
            j--;
        }
    }

    //Adding Remaing Characters - Only one of the below two while loops will run 

    while (i > 0) {
        ans += str1[i - 1];
        i--;
    }
    while (j > 0) {
        ans += str2[j - 1];
        j--;
    }

    return ans.split("").reverse().join("");


};