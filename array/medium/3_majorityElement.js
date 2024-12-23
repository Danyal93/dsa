/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let ans, count = 0;
    let n = nums.length
    for (let i = 0; i < n; i++) {
        if (ans === nums[i]) {
            count++;
        }
        else if (count > 0) {
            count--;
        }
        else {
            ans = nums[i];
            count = 1;
        }
    }
    count = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] == ans)
            count++;
    }
    if (count > Math.floor(n / 2))
        return ans;
    return null
};