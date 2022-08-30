// Assignment code here

const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '!@#$%^&*()?-_+=';
const numberCharacters = '1234567890';
const upperCaseCharacters = lowerCaseCharacters.toUpperCase();

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



