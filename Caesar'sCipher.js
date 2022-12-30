function rot13(str) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let words = str.split('');
    let answer = [];
    for(let i=0; i<words.length; i++) {
      if (alphabet.includes(words[i])) {
        if (alphabet.indexOf(words[i])-13 >=0) {
          answer.push(alphabet[alphabet.indexOf(words[i])-13])
        } else {
          let diff = alphabet.indexOf(words[i])-13;
          answer.push(alphabet[alphabet.length+diff])
        }
      } else {
        answer.push(words[i]);
      }
    }
    let finalAns = answer.join('');
    return finalAns
  }
  
  rot13("SERR PBQR PNZC");