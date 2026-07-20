/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
let element = 0;
let arr = [];
for (let i = 0; i < nums.length; i++) {
  element += nums[i];
  arr.push(element);
}
return arr;

};