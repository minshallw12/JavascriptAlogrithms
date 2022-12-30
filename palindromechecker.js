function palindrome(str) {
    let lowerCaseStr = str.toLowerCase();
    let charArr = lowerCaseStr.split('');
    let validChar = 'abcdejghijklmnopqrstuvwxyz1234567890!@#$%^&*'
    let validArr = [];
  
    for (let i=0; i < charArr.length; i++) {
      if (validChar.includes(charArr[i])) {
        validArr.push(charArr[i]);
      }
    }
    let valid = validArr.join('');
    let reverse = validArr.reverse().join('');
  
    if (reverse === valid){
      return true;
    }
    return false;
  }
  
 console.log(palindrome("race car"));