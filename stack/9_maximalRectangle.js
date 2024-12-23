//@ts-check 
function NSER(nums) {
    let n = nums.length;
    let st = [], ans = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        while (st.length !== 0 && nums[i] <= nums[st[st.length - 1]]) {
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

function NSL(nums) {
    let n = nums.length;
    let st = [], ans = new Array(n);
    for (let i = 0; i < n; i++) {
        while (st.length !== 0 && nums[i] < nums[st[st.length - 1]]) {
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
 * @param {number[]} nums
 * @return {number}
 */
function largestRectangleArea(nums) {
    let n = nums.length
    let ans = 0
    let nser = NSER(nums)
    let nsl = NSL(nums)
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, (nser[i] - nsl[i] - 1) * nums[i]);
    }
    return ans
}
/**
 * @param {string[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
    let n = matrix.length
    let m = matrix[0].length
    let ans = 0
    let temp = new Array(m).fill(0)
    for (let i = 0; i < n; i++) {
        let nums = matrix[i].map(n => parseInt(n))
        nums.forEach((n, i) => {
            temp[i] += nums[i]
            if (nums[i] === 0)
                temp[i] = 0
        })
        ans = Math.max(ans, largestRectangleArea(temp))
    }
    return ans
}


maximalRectangle.run = () => {
    maximalRectangle(
        [
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"]
        ])
}
module.exports = maximalRectangle