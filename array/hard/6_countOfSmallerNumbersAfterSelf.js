//@ts-check
/**
 * 
 * @param {*} i 
 * @param {*} mid 
 * @param {*} j 
 * @param {[{val , index}]} data 
 * @param {*} ans 
 */
function merge(i, mid, j, data, ans) {
    let l1 = i
    let r1 = mid
    let counter = 0
    let temp = []
    while (l1 < mid && r1 <= j) {
        if (data[l1].val > data[r1].val) {
            counter++
            temp.push(data[r1++])
        }
        else {
            ans[data[l1].index] += counter
            temp.push(data[l1++])
        }
    }
    while (l1 < mid) {
        ans[data[l1].index] += counter
        temp.push(data[l1++])
    }
    while (r1 <= j) {
        temp.push(data[r1++])
    }
    for (let k = i; k <= j; k++) {
        data[k] = temp[k - i]
    }
}
function mergeSort(i, j, data, ans) {
    if (i >= j) return 0
    let mid = Math.ceil((i + j) / 2)
    mergeSort(i, mid - 1, data, ans)
    mergeSort(mid, j, data, ans)
    merge(i, mid, j, data, ans)
}


/**
 * @param {number[]} nums
 * @return {number[]}
 */
function countSmaller(nums) {
    let ans = Array(nums.length).fill(0)
    const data = nums.map((val, index) => ({ val, index }));
    mergeSort(0, nums.length - 1, data, ans)
    return ans
};

countSmaller.run = () => {
    countSmaller([5, 1, 2, 5, 6])
}

module.exports = countSmaller