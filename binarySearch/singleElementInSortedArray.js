/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
    let n = nums.length;
    let l = 0, r = n - 1;
    if (n === 1)
        return nums[0]
    if(nums[0] != nums[1]) return nums[0]
    if(nums[n-1] != nums[n-2]) return nums[n-1]
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
            return nums[mid]
        }
        else if (mid % 2 == 0) {
            if (nums[mid] == nums[mid + 1]) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
        else {
            if (nums[mid] == nums[mid - 1]) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
    }

};

singleNonDuplicate.run = () => {
    console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
}

module.exports = singleNonDuplicate