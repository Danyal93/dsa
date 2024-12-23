//@ts-check
/* 
    Example 1:

    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


*/


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    let n = intervals.length;
    let ans = []
    intervals.sort((a, b) => a[0] - b[0])
    let temp = intervals[0]
    for (let i = 1; i < n; i++) {
        if (intervals[i][0] <= temp[1]) {
            temp[0] = Math.min(temp[0], intervals[i][0])
            temp[1] = Math.max(temp[1], intervals[i][1])
        }
        else {
            ans.push(temp)
            temp = intervals[i]
        }
    }
    ans.push(temp)
    return ans
};
function mergeIntervals() {

}

mergeIntervals.run = () => {
    merge([[1, 3], [2, 6], [8, 10], [15, 18]])
}


module.exports = mergeIntervals