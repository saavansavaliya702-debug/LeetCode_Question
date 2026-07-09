/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
let n = nums.length - 1;
let sorted = [...nums].sort((a, b) => a - b);

let expected = [];
for (let i = 1; i <= n; i++) {
  expected.push(i);
}
expected.push(n); 

let isGood = true;
for (let i = 0; i < nums.length; i++) {
  if (sorted[i] !== expected[i]) {
    isGood = false;
    break;
  }
}

if (isGood) {
  return true;
} else {
  return false;
}
};