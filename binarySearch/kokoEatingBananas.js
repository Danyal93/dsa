//@ts-check
function calculateTime(nums, mid) {
    let time = 0;
    for (let i = 0; i < nums.length; i++) {
        time += Math.ceil(nums[i] / mid)
    }
    return time
}
function minEatingSpeed(nums, h) {
    let n = nums.length;
    let l  = 1, r = -1;
    for (let i = 0; i < nums.length; i++) {
        r = Math.max(r, nums[i]);
    }
    let ans = r;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let time = calculateTime(nums, mid)
        if (time <= h) {
            ans = mid;
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return ans
};
minEatingSpeed.run = () => {
    minEatingSpeed([312884470], 312884469)

}



module.exports = minEatingSpeed