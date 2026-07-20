/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    
let count = 0;
for (let i = 0; i < words.length; i++) {
  const element = words[i].slice(0, pref.length);
  if (pref === element) {
    count++;
  }
}
return count;
};