//@ts-check

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numberOfSubarraysWithAtleastKOddElement(nums, k) {
    let ans = 0, i = 0, j = 0, n = nums.length, sum = 0;
    if (k < 0) return 0
    while (j < n) {
        sum += nums[j] % 2 === 0 ? 0 : 1;
        while (sum > k) {
            sum -= nums[i] % 2 === 0 ? 0 : 1;
            i++
        }
        ans += j - i + 1
        j++
    }
    return ans
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numberOfSubarrays(nums, k) {
    return (
        numberOfSubarraysWithAtleastKOddElement(nums, k) -
        numberOfSubarraysWithAtleastKOddElement(nums, k - 1)
    );
};

function numberOfNiceSubarrays() {

}

numberOfNiceSubarrays.run = () => {
    numberOfSubarrays([1, 1, 2, 1, 1], 3)
}

module.exports = numberOfNiceSubarrays