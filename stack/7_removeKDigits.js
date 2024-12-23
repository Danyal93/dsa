// @ts-check

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

//Input: num = "1432219", k = 3
// Output: "1219"
function removeKdigits(num, k) {
    let str = num.split("")

    let st = []
    for (let i = 0; i < str.length; i++) {
        while (st.length > 0 && k > 0 && st[st.length - 1] > parseInt(str[i])) {
            st.pop()
            k--;
        }
        st.push(parseInt(str[i]))
    }
    while (st.length > 0 && k > 0) {
        st.pop()
        k--
    }

    let trim = 0
    while (trim < st.length) {
        if (st[trim] !== 0)
            break;
        trim++
    }
    let ans = st.splice(trim).join("") 
    if(ans === ""){
        ans = "0"
    }
    return ans
};

removeKdigits.run = () => {
    removeKdigits("112", 1)
}
module.exports = removeKdigits