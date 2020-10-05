// Character Variables
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function getOptions() {
  var length = parseInt(prompt("How long do you want your password to be? (Between: 8 & 128)"));

  if (length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }
  if (length > 128) {
    alert("Password is too long. Must be less than 128 characters.");
    return;
  }
  if (isNaN(length) === true) {
    alert("I'm sorry, you can only input numbers in this field.");
    return;
  }

  var includeNumbers = confirm("Click OK to use numbers.");
  var includeLowercase = confirm("Click OK to use lowercase letters.");
  var includeUppercase = confirm("Click OK to use uppercase letters.");
  var includeSpecialCharacters = confirm("Click OK to use special characters.");

  // Object to store user input
  var passwordOptions = {
    length: length,
    includeNumbers: includeNumbers,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeSpecialCharacters: includeSpecialCharacters
  };

  return passwordOptions;
}

function generatePassword() {
  var options = getOptions();
}

// variable for the generate button on the html page.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
