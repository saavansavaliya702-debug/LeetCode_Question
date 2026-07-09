/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
 let last = 0;
let ans = [];
for (let i = 0; i < nums.length; i++) {
  let n = nums[i];
  let digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
 
  ans.push(...digits.reverse());
}
 return ans;
};