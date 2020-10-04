// Assignment Code
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword(lower, upper, number, symbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword => {
  	var length = +lengthEl.value;
  	var checkLower = lowercaseEl.checked;
  	var checkUpper = uppercaseEl.checked;
  	var checkNumber = numbersEl.checked;
  	var checkSymbol = symbolsEl.checked;

})

//Generator Settings
var settings = {
  lower: generateLowerCase,
  upper: generateUpperCase,
  number: generateNumber,
  special: generateSpecial
}
// Lower Case Option
function generateLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(generateLowerCase());

// Uppercase Option
function generateUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(generateUpperCase());

// Number Option
function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(generateNumber());

// Special Character Option
function generateSpecial() {
  var specialChars = '!@#$%^&*(){}[]=<>/.,';
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}
console.log(generateSpecial());
