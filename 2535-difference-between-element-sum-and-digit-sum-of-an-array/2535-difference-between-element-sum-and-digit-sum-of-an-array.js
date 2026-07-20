/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

    let element = 0;
    let element1 = 0;
    for (let i = 0; i < nums.length; i++) {
        element += nums[i];
    }

    let toy = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] < 10) {
            element1 = element1 + nums[j];
        } else {
            // sum every digit, works for any number of digits (not just 2)
            let num = nums[j];
            while (num > 0) {
                toy += num % 10;
                num = Math.floor(num / 10);
            }
        }
    }
    let element2 = element1 + toy;

    return Math.abs(element - element2);
};