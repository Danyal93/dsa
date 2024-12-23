class Heap {
  constructor(nodes, leaf) {
    this._nodes = Array.isArray(nodes) ? nodes : [];
    this._leaf = leaf || null;
  }

  _hasLeftChild(parentIndex) {
    const leftChildIndex = parentIndex * 2 + 1;
    return leftChildIndex < this.size();
  }

  _hasRightChild(parentIndex) {
    const rightChildIndex = parentIndex * 2 + 2;
    return rightChildIndex < this.size();
  }

  _getKey(node) {
    if (typeof node === "object") return node.key;
    return node;
  }

  _swap(i, j) {
    const temp = this._nodes[i];
    this._nodes[i] = this._nodes[j];
    this._nodes[j] = temp;
  }

  _compare(parentNode, childNode) {
    // @ts-ignore
    return this._compareKeys(this._getKey(parentNode), this._getKey(childNode));
  }

  _shouldSwap(parentIndex, childIndex) {
    if (parentIndex < 0 || parentIndex >= this.size()) return false;
    if (childIndex < 0 || childIndex >= this.size()) return false;

    return !this._compare(this._nodes[parentIndex], this._nodes[childIndex]);
  }

  heapifyUp(startingIndex) {
    let childIndex = startingIndex;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  _compareChildrenOf(parentIndex) {
    if (!this._hasLeftChild(parentIndex) && !this._hasRightChild(parentIndex)) {
      return -1;
    }

    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;

    if (!this._hasLeftChild(parentIndex)) {
      return rightChildIndex;
    }

    if (!this._hasRightChild(parentIndex)) {
      return leftChildIndex;
    }

    const isLeft = this._compare(
      this._nodes[leftChildIndex],
      this._nodes[rightChildIndex]
    );

    return isLeft ? leftChildIndex : rightChildIndex;
  }

  _heapifyDown(startingIndex) {
    let parentIndex = startingIndex;
    let childIndex = this._compareChildrenOf(parentIndex);

    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this._compareChildrenOf(parentIndex);
    }
  }

  extractRoot() {
    if (this.isEmpty()) return null;

    const root = this.root();
    this._nodes[0] = this._nodes[this.size() - 1];
    this._nodes.pop();
    this._heapifyDown(0);

    if (root === this._leaf) {
      this._leaf = this.root();
    }

    return root;
  }

  _heapifyDownUntil(index) {
    let parentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let childIndex;

    while (leftChildIndex < index) {
      // @ts-ignore
      childIndex = this?._compareChildrenBefore?.(
        index,
        leftChildIndex,
        rightChildIndex
      );

      if (this._shouldSwap(parentIndex, childIndex)) {
        this._swap(parentIndex, childIndex);
      }

      parentIndex = childIndex;
      leftChildIndex = parentIndex * 2 + 1;
      rightChildIndex = parentIndex * 2 + 2;
    }
  }

  _clone(HeapType) {
    return new HeapType(this._nodes.slice(), this._leaf);
  }

  sort() {
    for (let i = this.size() - 1; i > 0; i -= 1) {
      this._swap(0, i);
      this._heapifyDownUntil(i);
    }

    return this._nodes;
  }

  insert(key, value) {
    const newNode = value !== undefined ? { key, value } : key;
    this._nodes.push(newNode);
    this.heapifyUp(this.size() - 1);
    if (this._leaf === null || !this._compare(newNode, this._leaf)) {
      this._leaf = newNode;
    }
    return this;
  }

  fix() {
    for (let i = 0; i < this.size(); i += 1) {
      this.heapifyUp(i);
    }
    return this;
  }

  isValid() {
    const isValidRecursive = (parentIndex) => {
      let isValidLeft = true;
      let isValidRight = true;

      if (this._hasLeftChild(parentIndex)) {
        const leftChildIndex = parentIndex * 2 + 1;
        isValidLeft = this._compare(
          this._nodes[parentIndex],
          this._nodes[leftChildIndex]
        );

        if (!isValidLeft) {
          return false;
        }

        isValidLeft = isValidRecursive(leftChildIndex);
      }

      if (this._hasRightChild(parentIndex)) {
        const rightChildIndex = parentIndex * 2 + 2;
        isValidRight = this._compare(
          this._nodes[parentIndex],
          this._nodes[rightChildIndex]
        );

        if (!isValidRight) {
          return false;
        }

        isValidRight = isValidRecursive(rightChildIndex);
      }

      return isValidLeft && isValidRight;
    };

    return isValidRecursive(0);
  }

  root() {
    if (this.isEmpty()) return null;
    return this._nodes[0];
  }

  leaf() {
    return this._leaf;
  }

  size() {
    return this._nodes.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this._nodes = [];
    this._leaf = null;
  }

  static _heapify(list, HeapType) {
    if (!Array.isArray(list)) {
      throw new Error(".heapify expects an array");
    }

    return new HeapType(list).fix();
  }

  static _isHeapified(list, HeapType) {
    return new HeapType(list).isValid();
  }
}

class MinHeap extends Heap {
  _compareKeys(parentKey, childKey) {
    return parentKey < childKey;
  }

  _compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
    const leftChildKey = this._getKey(this._nodes[leftChildIndex]);
    const rightChildKey = this._getKey(this._nodes[rightChildIndex]);

    if (rightChildKey < leftChildKey && rightChildIndex < index) {
      return rightChildIndex;
    }
    return leftChildIndex;
  }

  clone() {
    return super._clone(MinHeap);
  }

  static heapify(list) {
    return super._heapify(list, MinHeap);
  }

  static isHeapified(list) {
    return super._isHeapified(list, MinHeap);
  }
}

class MinPriorityQueue {
  constructor(getCompareValue, _heap) {
    if (getCompareValue && typeof getCompareValue !== "function") {
      throw new Error(
        "MinPriorityQueue constructor requires a callback for object values"
      );
    }
    this._heap = _heap || new MinHeap(getCompareValue);
  }

  front() {
    return this._heap.root();
  }

  back() {
    return this._heap.leaf();
  }

  enqueue(value) {
    return this._heap.insert(value);
  }

  push(value) {
    return this.enqueue(value);
  }

  dequeue() {
    return this._heap.extractRoot();
  }

  pop() {
    return this.dequeue();
  }

  remove(cb) {
    if (typeof cb !== "function") {
      throw new Error("MinPriorityQueue remove expects a callback");
    }

    const removed = [];
    const dequeued = [];
    while (!this.isEmpty()) {
      const popped = this.pop();
      if (cb(popped)) {
        removed.push(popped);
      } else {
        dequeued.push(popped);
      }
    }

    dequeued.forEach((val) => this.push(val));
    return removed;
  }

  contains(cb) {
    if (typeof cb !== "function") {
      throw new Error("MinPriorityQueue contains expects a callback");
    }

    let found = false;
    const dequeued = [];
    while (!this.isEmpty()) {
      const popped = this.pop();
      dequeued.push(popped);
      if (cb(popped)) {
        found = true;
        break;
      }
    }

    dequeued.forEach((val) => this.push(val));
    return found;
  }

  size() {
    return this._heap.size();
  }

  isEmpty() {
    return this._heap.isEmpty();
  }

  clear() {
    this._heap.clear();
  }

  toArray() {
    return this._heap.clone().sort().reverse();
  }

  [Symbol.iterator]() {
    let size = this.size();
    return {
      next: () => {
        size -= 1;
        return {
          value: this.pop(),
          done: size === -1,
        };
      },
    };
  }
}
module.exports = { MinPriorityQueue };
