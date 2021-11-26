// 时间复杂度 O(n);
Array.prototype.sequentialSearch = function(target) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] == target){
            return i;
        }
    }
    return -1;
}

const arr = [5,4,3,2,1];
const res = arr.sequentialSearch(3);
console.log("res----->", res);