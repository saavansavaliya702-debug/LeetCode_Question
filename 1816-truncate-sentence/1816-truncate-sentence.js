/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
arr1 = s.split(" ").splice(0, k).join(" ");

return arr1;

};