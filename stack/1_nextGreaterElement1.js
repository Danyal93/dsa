// @ts-check
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    let n2 = nums2.length;
    let st = [], ans = []
    let map = {}
    for (let i = n2 - 1; i >= 0; i--) {
        while (st.length !== 0 && nums2[i] > st[st.length - 1]) {
            st.pop()
        }
        if (st.length === 0) {
            map[nums2[i]] = -1
        }
        else {
            map[nums2[i]] = st[st.length - 1]
        }
        st.push(nums2[i])
    }

    for (let i = 0; i < nums1.length; i++) {
        ans.push(map[nums1[i]])
    }

    return ans
};

nextGreaterElement.run = () => {
    nextGreaterElement([4, 1, 2], [1, 3, 4, 2])
}

module.exports = nextGreaterElement