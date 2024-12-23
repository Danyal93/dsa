
class Solution {
    getFloor(x, arr) {
        let i = 0, j = arr.length - 1, ans = -1
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (arr[mid] <= x) {
                ans = arr[mid]
                i = mid + 1
            }
            else {
                j = mid - 1
            }
        }
        return ans
    }
    getCeil(x, arr) {
        let i = 0, j = arr.length - 1, ans = -1
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (arr[mid] >= x) {
                ans = arr[mid]
                j = mid - 1
            }
            else {
                i = mid + 1
            }
        }
        return ans

    }
    getFloorAndCeil(x, arr) {
        // code here
        arr = arr.sort((a, b) => a - b)
        let f = this.getFloor(x, arr)
        let c = this.getCeil(x, arr)
        return [f, c]
    }
}
function getCeil(x, arr) {

}

module.exports = getCeil