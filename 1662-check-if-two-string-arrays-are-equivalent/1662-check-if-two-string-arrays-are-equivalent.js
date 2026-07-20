/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
let ans = word1.join("");
let ans2 = word2.join("");

if (ans === ans2) {
  return true;
} else {
  return false;
}
};