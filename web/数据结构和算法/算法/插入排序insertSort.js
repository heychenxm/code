// 时间复杂度 O(n^2)
Array.prototype.insertSort = function() {
    for(let i = 1; i < this.length; i++){
        const temp = this[i];
        let j = i;
        while(j > 0) {
            if(this[j-1] > temp) {
                this[j] = this[j-1];
            }else{
                break;
            }
            j -= 1;
        }
        this[j] = temp;
    }
}

const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
arr.insertSort();
console.log(arr);