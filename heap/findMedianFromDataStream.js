// @ts-check
const {
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

// class MedianFinder {
//     constructor() {
//         this.minHeap = new MinPriorityQueue();
//         this.maxHeap = new MaxPriorityQueue();
//         this.index = -1
//     }
//     /** 
//      * @param {number} num
//      * @return {void}
//      */
//     addNum(num) {
//         this.index++
//         if (this.maxHeap.isEmpty() || this.maxHeap.front().element > num)
//             this.maxHeap.enqueue(num);
//         else
//             this.minHeap.enqueue(num);
//         if (this.maxHeap.size() > this.minHeap.size() + 1) {
//             this.minHeap.enqueue(this.maxHeap.front().element);
//             this.maxHeap.dequeue();
//         }
//         else if (this.minHeap.size() >= this.maxHeap.size() + 1) {
//             this.maxHeap.enqueue(this.minHeap.front().element);
//             this.minHeap.dequeue();
//         }
//     }
//     /**
//      * @return {number}
//      */
//     findMedian() {
//         if (this.index % 2 === 0)
//             return this.maxHeap.front().element
//         return (this.minHeap.front().element + this.maxHeap.front().element) / 2
//     }
// }


var MedianFinder = function () {
    // Use below links if you want to understand more about the PriorityQueue
    // https://github.com/datastructures-js/priority-queue
    // https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-
    this.minHeap = new MinPriorityQueue(); // holds right part 
    this.maxHeap = new MaxPriorityQueue(); // holds left part(elements in right > elements in left)
};


MedianFinder.prototype.addNum = function (num) {
    // inserting in min heap bubbles up the smallest element in this heap to top
    this.minHeap.enqueue(num);
    this.maxHeap.enqueue(this.minHeap.dequeue().element);
    // To balance the size
    // This will always keep min heap size >= max heap size
    if (this.minHeap.size() < this.maxHeap.size()) {
        this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }
};


MedianFinder.prototype.findMedian = function () {
    // Odd size input array
    if (this.minHeap.size() > this.maxHeap.size()) return this.minHeap.front().element;
    else return (this.minHeap.front().element + this.maxHeap.front().element) / 2; // Even size input array
};


function findMedianOfStream() {
    let mf = new MedianFinder()
    let arr = [-1, -2, -3, -4, -5]
    arr.forEach(nums => {
        mf.addNum(nums)
        console.log(mf.findMedian())
    })
    let x = 1
}

findMedianOfStream.run = () => {
    findMedianOfStream()
}

module.exports = findMedianOfStream