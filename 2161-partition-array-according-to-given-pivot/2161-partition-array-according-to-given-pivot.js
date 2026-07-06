/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const less=[];
    const mid=[];
    const big=[];

    for(let i=0;i<nums.length;i++){
        if(nums[i]<pivot){
            less.push(nums[i])
        }else if(nums[i]>pivot){
            big.push(nums[i])
        }else mid.push(nums[i])

    }return [...less,...mid,...big]
};