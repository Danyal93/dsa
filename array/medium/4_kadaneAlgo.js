//@ts-check
/**
 * @param {number[]} nums
 * @return {number}
 */
 function maxSubArray(nums) {
    let ans = nums[0], current =0
    for(let i=0;i<nums.length;i++){
        current += nums[i]
        ans = Math.max(ans, current)
        if(current<0){
            current = 0
        }
    }
    return ans
};