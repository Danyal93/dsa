//@ts-check
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let n = nums.length;
    let i = 0, j = 0
    while (j < n) {
        if (nums[i] == nums[j]) {
            j++
        }
        else {
            [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]];
            i++;
            j++;
        }
    }
    return i + 1
};
removeDuplicates.run = () => {
    removeDuplicates([1, 1])
}
module.exports = removeDuplicates