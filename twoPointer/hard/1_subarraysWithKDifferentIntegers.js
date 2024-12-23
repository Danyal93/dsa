//@ts-check

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysWithAtmostKDistinct(nums, k) {
  let ans = 0;
  let i = 0,
    j = 0,
    n = nums.length;
  let map = new Map();
  while (j < n) {
    map.set(nums[j], (map.get(nums[j]) ?? 0) + 1);
    while (map.size > k) {
      map.set(nums[i], map.get(nums[i]) - 1);
      if (map.get(nums[i]) === 0) map.delete(nums[i]);
      i++;
    }
    if (map.size <= k) ans += j - i + 1;
    j++;
  }
  return ans;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysWithKDistinct(nums, k) {
  return (
    subarraysWithAtmostKDistinct(nums, k) -
    subarraysWithAtmostKDistinct(nums, k - 1)
  );
}
subarraysWithKDistinct.run = () => {
  subarraysWithKDistinct([1, 2, 1, 2, 3], 2);
};
module.exports = subarraysWithKDistinct;
