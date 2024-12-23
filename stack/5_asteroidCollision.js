// @ts-check

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

function asteroidCollision(asteroids) {
    let n = asteroids.length;
    let st = []
    for (let i = 0; i < n; i++) {
        if (asteroids[i] > 0) st.push(asteroids[i]);
        else {
            while (st.length !== 0 && st[st.length - 1] > 0 && Math.abs(asteroids[i]) > st[st.length - 1]) {
                st.pop()
            }
            if (st.length !== 0 && st[st.length - 1] > 0 && Math.abs(asteroids[i]) === st[st.length - 1]) {
                st.pop()
            }
            else if (st.length == 0 || st[st.length - 1] < 0) {
                st.push(asteroids[i]);
            }
        }
    }

    return st
};
asteroidCollision.run = () => {
    asteroidCollision([-2, 1, -1, -1])
}
module.exports = asteroidCollision