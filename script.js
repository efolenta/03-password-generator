// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector('#length');
var uppercaseEl = document.querySelector('#uppercase');
var lowercaseEl = document.querySelector('#lowercase');
var numbersEl = document.querySelector('#numbers');
var symbolsEl = document.querySelector('#symbols');

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
