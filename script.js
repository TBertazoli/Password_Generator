// Assignment code here

const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '!@#$%^&*()?-_+=';
const numberCharacters = '1234567890';
const upperCaseCharacters = lowerCaseCharacters.toUpperCase();

//generate password function
function generatePassword() {
  var length = promptPasswordLength();
  var isLowerCase = false;
  var isUpperCase = false;
  var isNumeric = false;
  var isSpecialCharacters = false;

  do {
    isLowerCase = promptLowerCase();
    isUpperCase = promptUpperCase();
    isNumeric = promptNumeric();
    isSpecialCharacters = promptSpecialCharacters();
    if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecialCharacters) {
      window.alert("You must select at least one");
    }
  } while (!isLowerCase && !isUpperCase && !isNumeric && !isSpecialCharacters);

  var passwordCharacters = '';
  if (isLowerCase) {
    passwordCharacters += lowerCaseCharacters;
  }
  if (isUpperCase) {
    passwordCharacters += upperCaseCharacters;
  }
  if (isNumeric) {
    passwordCharacters += numberCharacters;
  }
  if (isSpecialCharacters) {
    passwordCharacters += specialCharacters;
  }
  console.log(passwordCharacters);

  var password = '';

  for (var i = 0; i < length; i++) {
    var index = randomNumber(0, passwordCharacters.length);
    password += passwordCharacters[index];
  }
  console.log(password);
  return password;
}

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

//lenght functiom
var promptPasswordLength = function () {
  var length = 0;
  do {
    length = window.prompt('How many characters? Choose a nummber between 8 and 128!');
  } while (length < 8 || length > 128);
  return length;
}
//Lowercase function
var promptLowerCase = function () {
  var lowerCase = "";
  do {
    lowerCase = window.prompt('Do you want to use "Lowercase" characters? Enter "yes" or "no".');
  } while (lowerCase !== "yes" && lowerCase !== "no");
  // validate prompt answer
  if (lowerCase === "yes") {
    return true;
  }
  return false;
}
//Uppercase function
var promptUpperCase = function () {
  var upperCase = "";
  do {
    upperCase = window.prompt('Do you want to use "Uppercase" characters? Enter "yes" or "no".');
  } while (upperCase !== "yes" && upperCase !== "no");
  // validate prompt answer
  if (upperCase === "yes") {
    return true;
  }
  return false;
}
//Include numbers function
var promptNumeric = function () {
  var numeric = 0;
  do {
    numeric = window.prompt('Do you want to include "Numbers"? Enter "yes" or "no".');
  } while (numeric !== "yes" && numeric !== "no");
  if (numeric === "yes") {
    return true;
  }
  return false;
}
//Special Characters function
var promptSpecialCharacters = function () {
  var specialCharacters = "";
  do {
    specialCharacters = window.prompt('Do you want to include "Special Characters"? Enter "yes" or "no".');
  } while (specialCharacters !== "yes" && specialCharacters !== "no");
  if (specialCharacters === "yes") {
    return true;
  }
  return false;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



