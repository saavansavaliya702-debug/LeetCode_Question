/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
let ans = [];
for (let i = 0; i < sentences.length; i++) {
  let count = 0;
  const element = sentences[i].split(" ");

  for (let j = 0; j < element.length; j++) {
    if (element[j] !== "") {
      count++;
    }
  }
  ans.push(count);
}
let max = ans[0];
for (let k = 1; k < ans.length ; k++) {
  if (max <= ans[k]) {
    max = ans[k];
  }

}
return max;

};