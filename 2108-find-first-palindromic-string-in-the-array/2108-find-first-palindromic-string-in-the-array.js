/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
  const element = words[i];
  const ans = element.split("").reverse().join("");
  // console.log(ans);
  if (ans === element) {
    return element;
  }
  
}
return ""
};