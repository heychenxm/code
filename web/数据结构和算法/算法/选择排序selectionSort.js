// 时间复杂度O(n^2)
Array.prototype.selectionSort = function() {
    for(let i = 0; i < this.length - 1; i ++) {
        let indexMin = i;
        for(let j = i; j < this.length; j ++) {
            if(this[j] < this[indexMin]){
                indexMin = j;
            }
        }
        [this[i], this[indexMin]] = [this[indexMin], this[i]];
    }
    
}

const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
arr.selectionSort();
console.log(arr);   // [2,3,4,5, 15, 19,26, 27, 36, 38, 44, 46,47, 48, 50]
