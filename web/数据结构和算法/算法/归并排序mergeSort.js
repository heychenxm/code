// 时间复杂度 O(n*logN)
// 分： O(logN)
// 合： O(n)
Array.prototype.mergeSort = function() {
    const rec = (arr) => {
        if(arr.length === 1) {return arr};
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        const orderLeft = rec(left);
        const orderRight = rec(right);
        const res = [];
        while(orderLeft.length || orderRight.length){
            if(orderLeft.length && orderRight.length){
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            }else if(orderLeft.length){
                res.push(orderLeft.shift())
            }else if(orderRight.length){
                res.push(orderRight.shift())
            }
        }
        return res;
    }
    const res = rec(this);
    res.forEach((n, i)=>{this[i] = n}); // 赋值到原数组
}

const arr = [7,4,2,0,-1];
arr.mergeSort();
console.log(arr);