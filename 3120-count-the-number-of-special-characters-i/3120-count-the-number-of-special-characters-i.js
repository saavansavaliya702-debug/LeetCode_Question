var numberOfSpecialChars = function (word) {
  let count = 0;

  for (let i = 65; i <= 90; i++) {       
    const upper = String.fromCharCode(i);
    const lower = String.fromCharCode(i + 32);  

    if (word.includes(upper) && word.includes(lower)) {
      count++;
    }
  }

  return count;
};

