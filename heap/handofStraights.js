// @ts-check

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');


function isNStraightHand(hand, groupSize) {
    const minHeap = new MinPriorityQueue()
    if(hand.length % groupSize != 0) return false
    let map = {}
    for (let i = 0; i < hand.length; i++) {
        if (map[hand[i]])
            map[hand[i]] = map[hand[i]] + 1
        else
            map[hand[i]] = 1
    }
    Object.keys(map).forEach(k => {
        minHeap.enqueue(+k)
    })
    while (!minHeap.isEmpty()) {
        let min = minHeap.front().element
        if (!map[min]) {
            minHeap.dequeue();
            delete map[min]
            continue
        }
        map[min]--;
        if (map[min] === 0) {
            minHeap.dequeue();
            delete map[min]
        }
        for (let i = 1; i < groupSize; i++) {
            if (!map[min + i]) {
                return false
            }
            map[min + i]--;
        }
    }
    return true
}
isNStraightHand.run = () => {
    isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)
}
module.exports = isNStraightHand