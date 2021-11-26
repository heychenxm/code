// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    let result = n;
    while(left >= right) {
        let mid = Math.floor(left + (right - left)/2);
        if(nums[mid]<= target){
            ans = mid;
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    return result;
    
};

//  测试用例
