// @ts-check
function findMin(nums) {
    let n = nums.length;
    let l = 0, r = n - 1;
    let ans = nums[0]
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[l] < nums[r]) {
            ans = Math.min(ans, nums[l]);
            break;
        }
        else if (nums[l] <= nums[mid]) {
            ans = Math.min(ans, nums[l]);
            l = mid + 1
        }
        else {
            ans = Math.min(ans, nums[mid]);
            r = mid - 1
        }
    }
    return ans;
};
findMin.run = ()=>{
    findMin([2,1])
}
module.exports = findMin