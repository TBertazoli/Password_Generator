// Assignment code here

//generate password function
var generatePassword = function () {
  var length = promptPasswordLength();
  var lowerCase = promptLowerCase();
  var upperCase = promptUpperCase();
  var numeric = promptNumeric();
  var specialCharacters = promptSpecialCharacters();
}

var promptPasswordLength = function () {
  var length = 0;
  do {
    length = window.prompt('Choose how many characters between 8 and 128!');
  } while (length < 8 || length > 128);
  return length;
}

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


//Variables

