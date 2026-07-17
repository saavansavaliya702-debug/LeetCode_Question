/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let je = jewels.split("");
let sec = stones.split("");
let count = 0;
for (let i = 0; i < je.length; i++) {
  for (let j = 0; j < sec.length; j++) {
    if (je[i] == sec[j]) {
      count++;
    }
  }
}
return count
};