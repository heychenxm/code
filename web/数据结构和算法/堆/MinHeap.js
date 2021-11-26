// 实现最小堆列
class MinHeap {
    constructor() {
        this.heap = [];
    }
    // 交换节点值
    swap(i1, i2) {
        // [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];    // 交换值
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }
    // 获取父节点
    getParentIndex(i) {
        return  (i - 1) >> 1;   // 求除以2的商
    }

    // 获取左子节点
    getLeftIndex(i) {
        return i * 2 + 1;
    }

    // 获取左子节点
    getRightIndex(i) {
        return i * 2 + 2;
    }
    
    // 上移
    shiftUp(index) {
        if(index == 0) return;
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex)
        }
    }

    // 下移
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIdex = this.getRightIndex(index);
        if(this.heap[leftIndex] < this.heap[index]){
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if(this.heap[rightIdex] < this.heap[index]){
            this.swap(rightIdex, index);
            this.shiftDown(rightIdex);
        }
    }

    // 插入
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    // 删除堆顶
    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }

    //获取堆顶
    peak() {
        return this.heap[0];
    }

    //获取堆的长度
    size() {
        return this.heap.length;
    }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);    // [1, 3, 2]
h.pop();
console.log(h.peak());
console.log(h.size());