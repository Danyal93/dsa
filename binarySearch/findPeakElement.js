//@ts-check
/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
    let n= nums.length;
    let l= 0, r= n-1;
    if(n ==1) return 0
    if(nums[0] > nums[1]) return 0
    if(nums[n-1] > nums[n-2]) return n-1
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid + 1])
            return mid;
        else if(nums[mid] < nums[mid+1]){
            l= mid + 1;
        }
        else {
            r= mid - 1;
        }
    }
    return -1;
};


findPeakElement.run = () => {
    console.log(findPeakElement([1,2,1,3,5,6,4]))
}

module.exports = findPeakElement

