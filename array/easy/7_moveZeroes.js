//@ts-check



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let n = nums.length;
    let i = 0;
    for (let j = 0; j < n; j++) {
        if(nums[j] != 0){
            [nums[j], nums[i]] = [nums[i], nums[j]];
            i++;
        }
    }
};


moveZeroes.run = () => {
    moveZeroes([0, 1, 0, 3, 12])
}
module.exports = moveZeroes