// @ts-check
class Solution {
    constructor() {
        this.counter = 0
    }
    merge(i, mid, j, nums) {
        let l1 = i, r1 = mid
        let temp = []
        // 8 9 12    3 5 6
        while (l1 < mid && r1 <= j) {
            if (nums[l1] > nums[r1]) {
                temp.push(nums[r1++])
            }
            else {
                temp.push(nums[l1++])
            }
        }
        while (l1 < mid) {
            temp.push(nums[l1++])
        }
        while (r1 <= j) {
            temp.push(nums[r1++])
        }
        for (let k = i; k <= j; k++) {
            nums[k] = temp[k - i]
        }
    }
    countReversePair(i, mid, j, nums) {
        let r1 = mid
        for (let k = i; k < mid; k++) {
            while (r1 <= j && nums[k] > 2 * nums[r1]) r1++
            this.counter += r1 - mid
        }
        return this.counter
    }
    mergeSort(i, j, nums) {
        if (i >= j) return this.counter
        let mid = Math.ceil((i + j) / 2)
        this.mergeSort(i, mid - 1, nums)
        this.mergeSort(mid, j, nums)
        this.countReversePair(i, mid, j, nums)
        this.merge(i, mid, j, nums)
        return this.counter
    }
}





/**
 * @param {number[]} nums
 * @return {number}
 */
function reversePairs(nums) {
    let obj = new Solution()

    obj.mergeSort(0, nums.length - 1, nums)
    return obj.counter
};
reversePairs.run = () => {
    reversePairs([2, 4, 3, 5, 1])
}
module.exports = reversePairs