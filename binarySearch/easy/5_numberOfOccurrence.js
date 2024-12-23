//@ts-check

class Solution {
    // Function to count the occurrences of target in the array.
    getFloor(arr, target) {
        let i = 0, j = arr.length - 1, ans = -1
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (arr[mid] <= target) {
                ans = mid
                i = mid + 1
            }
            else {
                j = mid - 1
            }
        }
        return ans
    }
    getCeil(arr, target) {
        let i = 0, j = arr.length - 1, ans = -1
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (arr[mid] >= target) {
                ans = mid
                j = mid - 1
            }
            else {
                i = mid + 1
            }
        }
        return ans

    }
    isPresent(arr, target) {
        let i = 0, j = arr.length - 1, ans = false
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (arr[mid] === target) {
                ans = true
                break
            }
            if (arr[mid] > target) {
                j = mid - 1
            }
            else {
                i = mid + 1
            }
        }
        return ans
    }
    countFreq(arr, target) {
        // your code here
        if (!this.isPresent(arr, target)) return 0
        let floor = this.getFloor(arr, target)
        let ceil = this.getCeil(arr, target)
        let ans = floor - ceil + 1
        return ans
    }
}


function findFloor() {

}
module.exports = findFloor