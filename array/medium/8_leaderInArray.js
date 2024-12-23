class Solution {
    // Function to find the leaders in the array.
    leaders(a) {
        // code here
        let n = a.length
        let max = a[n - 1]
        let ans = []
        for (let i = n - 1; i >= 0; i--) {
            if (a[i] >= max) {
                ans.push(a[i])
                max = a[i]
            }
        }
        return ans.reverse()
    }
}