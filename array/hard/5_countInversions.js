//@ts-check
class Solution {
    counter = 0
    /**
     * @type {any[]}
     */
    temp = []
    counterCount(i, mid, j, arr) {
        let r1 = mid
        for (let k = i; k < mid; k++) {
            while (r1 <= j && arr[k] > arr[r1]) r1++
            this.counter += r1 - mid
        }
        return this.counter
    }
    merge(i, mid, j, arr) {
        let _i = i, _j = j, _mid = mid
        let k = i

        while (_i < mid && _mid <= j) {
            if (arr[_i] > arr[_mid]) {
                //this will also work..and counterCount will also work
                // this.counter += mid - _i
                this.temp[k++] = arr[_mid++]
            }
            else {
                this.temp[k++] = arr[_i++]
            }

        }
        while (_i < mid) {
            this.temp[k++] = arr[_i++]
        }
        while (_mid <= j) {
            this.temp[k++] = arr[_mid++]
        }
        for (let p = i; p <= j; p++) {
            arr[p] = this.temp[p]
        }
    }
    mergeSort(i, j, arr) {
        if (i === j)
            return arr[i]
        let mid = Math.ceil((i + j) / 2)
        this.mergeSort(i, mid - 1, arr)
        this.mergeSort(mid, j, arr)
        this.counterCount(i, mid, j, arr)
        this.merge(i, mid, j, arr)
    }
    /**
     * @param {number[]} arr
     * @returns {number}
     */
    inversionCount(arr) {
        this.temp = Array(arr.length)
        this.mergeSort(0, arr.length - 1, arr)
        return this.counter
    }
}

function getInversionCount() {
    let obj = new Solution()
    let ans = obj.inversionCount([2, 4, 1, 3, 5])
    console.log(ans)
}


getInversionCount.run = () => {
    getInversionCount()
}
module.exports = getInversionCount
