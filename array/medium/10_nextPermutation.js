//@ts-check
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    let n = nums.length
    let pivot = -1
    // find pivot
    // 1 7 3 6 5 4 2
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i
            break
        }
    }
    if (pivot === -1) {
        nums.reverse()
        return
    }

    // find the index of smallest greater number and swap with the  with pivot element 
    // 1 7 4 6 5 3 2
    let smallest = pivot + 1
    for (let i = n - 1; i > pivot; i--) {
        if (nums[i] > nums[pivot]) {
            smallest = i
            break
        }
    }
    [nums[pivot], nums[smallest]] = [nums[smallest], nums[pivot]];
    // reverse the array after pivot
    // 1 7 4 2 3 5 6
    for (let i = 1; i < (n - pivot) / 2; i++) {
        [nums[pivot + i], nums[n - i]] = [nums[n - i], nums[pivot + i]];
    }

};