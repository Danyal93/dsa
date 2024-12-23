
function calculatePower(mid, m, n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = ans * mid;
        if (ans > m)
            break;
    }
    return ans;
}
function nthRoot(n, m) {
    //code here
    let l = 1, r = m;
    if (m === 1)
        return 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let element = calculatePower(mid, m, n)
        if (element === m) {
            return mid;
        }
        else if (element > m) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return -1;



}


nthRoot.run = () =>{
    nthRoot(2,9)
}


module.exports = nthRoot