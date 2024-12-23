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
function NGER(nums) {
    let n = nums.length;
    let st = [], ans = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        while (st.length !== 0 && nums[i] >= nums[st[st.length - 1]]) {
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
 * @param {number[]} nums
 * @return {number[]}
 */

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
function NGL(nums) {
    let n = nums.length;
    let st = [], ans = new Array(n);
    for (let i = 0; i < n; i++) {
        while (st.length !== 0 && nums[i] > nums[st[st.length - 1]]) {
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

function sumSubarrayMins(nums) {
    let sum = 0;
    let n = nums.length
    let mod = 1000000000 + 7
    let nser = NSER(nums);
    let nsl = NSL(nums);
    for (let i = 0; i < n; i++) {
        sum = sum + ((nser[i] - i) * (i - nsl[i]) * nums[i])
    }

    return sum % mod
};



/**
 * @param {number[]} nums
 * @return {number}
 */

function subArrayRanges(nums) {
    let n = nums.length;
    let mod = 1000000000 + 7
    let nser = NSER(nums);
    let nsl = NSL(nums);
    let nger = NGER(nums);
    let ngl = NGL(nums);
    let sum = 0, sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + ((nser[i] - i) * (i - nsl[i]) * nums[i])
        sum2 = sum2 + ((nger[i] - i) * (i - ngl[i]) * nums[i])
    }
    return (sum2- sum) % mod
}

subArrayRanges.run = () => {
    subArrayRanges([4,-2,-3,4,1])
}

module.exports = subArrayRanges