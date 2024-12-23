//@ts-check

class SearchRange {
    constructor(nums, target) {
        this.nums = nums;
        this.target = target;
    }
    upperBound() {
        let i = 0, j = this.nums.length - 1, ans = -1;
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (this.nums[mid] >= this.target) {
                ans = mid
                j = mid - 1
            }
            else {
                i = mid + 1
            }
        }
        return ans
    }
    lowerBound() {
        let i = 0, j = this.nums.length - 1, ans = -1;
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (this.nums[mid] <= this.target) {
                ans = mid
                i = mid + 1
            }
            else {
                j = mid - 1
            }
        }
        return ans
    }
    searchRange() {
        let lb = this.lowerBound()
        let ub = this.upperBound()
        if (lb === ub)
            return [-1, -1]
        return [lb, ub]
    }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    let obj = new SearchRange(nums, target)
    let ans = obj.searchRange()
    return ans
};

module.exports = searchRange