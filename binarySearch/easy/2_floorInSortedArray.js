
class Solution {

    findFloor(arr, k) {
        // your code here
        let i = 0, j = arr.length - 1
        let ans = -1
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (arr[mid] > k) {
                j = mid - 1
            }
            else {
                ans = mid
                i = mid + 1
            }
        }
        return ans
    }
}

function findFloor(arr, k) {

}

module.exports = findFloor