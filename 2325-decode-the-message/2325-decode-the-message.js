/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    
let map = {};
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let index = 0;

// Create mapping
for (let ch of key) {
  if (ch !== " " && map[ch] === undefined) {
    map[ch] = alphabet[index];
    index++;
  }
}
console.log(map);

// Decode message
let result = "";

for (let ch of message) {
  if (ch === " ") {
    result += " ";
  } else {
    result += map[ch];
  }

}
 return result;
};