//@ts-check
/**
 * @param {number[]} arr
 * @return {number[]}
 */

function NSER(arr) {
    let n = arr.length;
    let st = [], ans = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        while (st.length !== 0 && arr[i] <= arr[st[st.length - 1]]) {
            st.pop()
        }
        if (st.length === 0) {
            ans[i] = n
        }
        else {
            ans[i] = st[st.length - 1]
        }
        st.push(i)
    }

    return ans
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function NSL(arr) {
    let n = arr.length;
    let st = [], ans = new Array(n);
    for (let i = 0; i < n; i++) {
        while (st.length !== 0 && arr[i] < arr[st[st.length - 1]]) {
            st.pop()
        }
        if (st.length === 0) {
            ans[i] = -1
        }
        else {
            ans[i] = st[st.length - 1]
        }
        st.push(i)
    }

    return ans
}
/**
 * @param {number[]} arr
 * @return {number}
 */

function sumSubarrayMins(arr) {
    let sum = 0;
    let n = arr.length
    let mod = 1000000000 + 7
    let nser = NSER(arr);
    let nsl = NSL(arr);
    for (let i = 0; i < n; i++) {
        sum = sum + ((nser[i] - i) * (i - nsl[i]) * arr[i])
    }

    return sum % mod
};
sumSubarrayMins.run = () => {
    sumSubarrayMins([3, 1, 2, 4])
}

module.exports = sumSubarrayMins