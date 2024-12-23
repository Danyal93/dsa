//@ts-check
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
function maxScore(cardPoints, k) {
    let sum = cardPoints.reduce((acc, curr) => acc + curr, 0)
    let i = 0, minSum = 0, n = cardPoints.length, currSum = 0
    for (let j = 0; j < n; j++) {
        currSum += cardPoints[j]
        if (j < n - k) {
            minSum = currSum
            continue
        }
        currSum -= cardPoints[i]
        minSum = Math.min(minSum, currSum)
        i++
    }
    return sum - minSum
};

function maximumPointsYouCanObtainFromCards() { }
maximumPointsYouCanObtainFromCards.run = () => {
    maxScore([1, 2, 3, 4, 5, 6, 1], 3)
}

module.exports = maximumPointsYouCanObtainFromCards