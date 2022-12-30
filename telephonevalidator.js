function telephoneCheck(str) {
    let regex = /^1?\s?\d{3}\s\d{3}\s\d{4}|^1\s?\(\d{3}\)\s?\d{3}\-\d{4}|^\(\d{3}\)\s?\d{3}\s\d{4}|^\(\d{3}\)\s?\d{3}\s\d{4}|^\(\d{3}\)\s?\d{3}\-\d{4}|^1\s\d{3}\-\d{3}\-\d{4}|^\d{10}$|^\d{3}\-\d{3}\-\d{4}$/g;
    let answer = regex.test(str)
    return answer;
  }

  console.log(telephoneCheck(555-555-5555))