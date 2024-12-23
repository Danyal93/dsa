// @ts-check
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

largestRectangleArea.run = () => {
    largestRectangleArea([2,1,5,6,2,3])
}
module.exports = largestRectangleArea
