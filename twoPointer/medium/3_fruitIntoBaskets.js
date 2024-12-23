//@ts-check

class Solution {
    // Function to find the sum of minimum elements of all possible subarrays of fruits.
    totalFruits(arr) {
        // your code here
        let n = arr.length;
        let i = 0, j = 0;
        let ans = 0
        let map = new Map();

        while (j < n) {
            map.set(arr[j], (map.get(arr[j]) ?? 0 ) + 1)
            while (map.size > 2) {
                let i_counters = map.get(arr[i]) ?? 0
                if (i_counters > 1)
                    map.set(arr[j], i_counters - 1)
                else
                    map.delete(arr[i])
                i++
            }
            ans = Math.max(ans, j - i + 1)
            j++
        }
        return ans
    }
}


function totalFruits() {
    let obj = new Solution();
    let ans = obj.totalFruits([3, 1, 2, 2, 2, 2]);
    console.log(ans)
}
totalFruits.run = () => {
    totalFruits()
}
module.exports = totalFruits