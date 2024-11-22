// Write your code here
function checkPassword(password) {
  const Regexes = {
    oneLowerCaseLetter: /(?=.+[a-z])/,
    oneUpperCaseLetter: /(?=.+[A-Z])/,
    oneDigit: /(?=.+[0-9])/,
    oneSpecialCharacter: /(?=.+[!@#$%^&*])/,
    minimumEightCharacters: /(?=.{8,})/,
  };

  const getCombinedRegex = (regexes) => new RegExp(regexes.map(regex => regex.source).join(""));
  const finalRegex = getCombinedRegex(Object.values(Regexes));

  return finalRegex.test(password) ? "Your password is valid" : "Your password is invalid";
}

console.log(checkPassword("abc"));
console.log(checkPassword("9Ab!4567"));