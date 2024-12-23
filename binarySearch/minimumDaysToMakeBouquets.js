
//@ts-check
function calculateNumberOfBouquet(nums, day, k) {
    let ans = 0, crr = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= day) crr++;
        else {
            ans += Math.floor(crr / k)
            crr = 0
        }
    }
    ans += Math.floor(crr / k)
    return ans
}

/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function minDaysToMakeBouquet(nums, m, k) {
    let n = nums.length;
    if (n < m * k) return -1
    if (n === 1) return nums[0]
    let l = 1, r = -1;
    for (let i = 0; i < nums.length; i++) {
        r = Math.max(r, nums[i]);
    }
    let ans = r;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let numbersOfBuquests = calculateNumberOfBouquet(nums, mid, k);
        if (numbersOfBuquests >= m) {
            ans = mid;
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }

    }

    return ans
};


minDaysToMakeBouquet.run = () => {
    minDaysToMakeBouquet([1,10,3,10,2], 3, 1)
}


module.exports = minDaysToMakeBouquet