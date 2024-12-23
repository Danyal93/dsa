//@ts-check
/**
 * @param {number} n
 * @return {number}
 */
function floorSqrt(n) {
    let l = 1, r = n - 1;
    if (n === 1)
        return 1
    let ans = 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let element = mid * mid;
        if (element === n) {
            return mid;
        }
        else if (element > n) {
            r = mid - 1;
        }
        else {
            ans = mid;
            l = mid + 1;
        }
    }
    return ans;
};

floorSqrt.run = () => {
    console.log(floorSqrt(2))
}


module.exports = floorSqrt