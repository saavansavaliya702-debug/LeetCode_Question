/**
 * @param {number[]} nums
 * @return {boolean}
 */

var check = function(nums) {
    const n = nums.length;
    let k = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            k++;
            if (k > 1) return false;
        }
    }
    return true;
};
