/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
for (let i = s.length - 1; i >= 0; i--) {
  if (s.charAt(i) === " " && count == 0) {
    continue;
  } else if (s.charAt(i) === " " && count !== 0) {
    break;
  } else {
    count++;
  }
}return count;
};