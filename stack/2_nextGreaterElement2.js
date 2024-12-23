/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
    let n = nums.length;
    let st = [], ans = []
    for (let i = 2 * n - 1; i >= 0; i--) {
        // if(i===n-1)
        // st = []
        let element = nums[i % n]
        while (st.length !== 0 && nums[i % n] >= st[st.length - 1]) {
            st.pop()
        }
        if (i < n) {
            if (st.length === 0) {
                ans.push(-1)
            }
            else {
                ans.push(st[st.length - 1])
            }
        }
        st.push(nums[i % n])
    }
    return ans.reverse().splice(0, n)
};

nextGreaterElements.run = () => {
    nextGreaterElements([0, 2, 1])
}

module.exports = nextGreaterElements