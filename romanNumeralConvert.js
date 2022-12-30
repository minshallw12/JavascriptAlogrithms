function convertToRoman(num) {
    let romanTable = {
      "M":1000,
      "CM":900,
      "D":500,
      "CD":400,
      "C":100,
      "XC":90,
      "L":50,
      "XL":40,
      "X":10,
      "IX":9,
      "V":5,
      "IV":4,
      "I":1
    };
    var str = '';
  
    for (let i of Object.keys(romanTable)) {
      var q = Math.floor(num / romanTable[i]);
      num -= q * romanTable[i];
      str += i.repeat(q);
    }
  
    return str;
  
  }

  console.log(convertToRoman(36));