//@ts-check
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive1(arr, k) {
    let high = arr.length;
    if (k < arr[0]) return k
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - i - 1 >= k) {
            high = i;
            break
        }
    }
    return high + k
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive(arr, k) {
    let n = arr.length;
    if (k < arr[0]) return k

    let low = 0, high = n, ans = n
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let gap = arr[mid] - mid - 1
        if (gap >= k) {
            ans = mid
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }

    return ans + k

}
findKthPositive.run = () => {
    findKthPositive([2, 3, 4, 7, 11], 5)
}


module.exports = findKthPositive