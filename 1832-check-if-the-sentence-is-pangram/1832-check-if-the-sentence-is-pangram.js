/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let word = sentence.split("");
    let seen = new Set(word); 
 if (seen.size === 26) {
        return true;
    } else {
        return false;
    }
};