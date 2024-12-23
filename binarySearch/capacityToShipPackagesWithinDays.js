//@ts-check
function calculateDays(nums, capacity) {
    let days = 0, crr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (crr + nums[i] > capacity) {
            days++
            crr = 0
        }
        crr += nums[i]
    }
    if (crr <= capacity)
        days++
    return days
}

/**
 * @param {number[]} nums
 * @param {number} days
 * @return {number}
 */
function shipWithinDays(nums, days) {
    let r = 0, l = 0;
    for (let i = 0; i < nums.length; i++) {
        r += nums[i]
        l = Math.max(l, nums[i])
    }


    let ans = r
    while (l <= r) {
        let capacity = Math.floor((l + r) / 2);
        let takenDayes = calculateDays(nums, capacity)
        if (takenDayes <= days) {
            ans = capacity;
            r = capacity - 1;
        }
        else if (takenDayes > days) {
            l = capacity + 1;
        }

    }
    return ans
};

shipWithinDays.run = () => {
    shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
}

module.exports = shipWithinDays