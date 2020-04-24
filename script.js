// Assignment Code
var generateBtn = document.querySelector("#generate");
var passGenArray = [];
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

var passLength;
var passLowerCase;
var passUpperCase;
var passNumericChar;
var passSpecialChar;

// Write password to the #password input
function userPassCriteria() {
  // Reset passGenArray to allow this to be run multiple times in succession.
  resetApp();

  // Ask user for their password length.
  passLength = prompt("How many characters would you like your password to be?\r\n(Valid Password Length is between 8-128 characters.)");

  // Ask user if they would like at least one of the specified characters type.
  passLowerCase = confirm("Would you like your password to contain lowercase characters?");
  passUpperCase = confirm("Would you like your passowrd to contain uppercase characters?");
  passNumericChar = confirm("Would you like your password to contain numbers?");
  passSpecialChar = confirm("Would you like your password to contain special characters?\r\n(Ex. $, %, &, @)");

  // Catch the user input and ensure it's the correct string length. PRompt user to input valid character length is not between 8-128.
  if (passLength < 8 || passLength > 128 || passLength === null) {
    alert("Your selected password length has to be at least 8 characters and no more than 128.");
    userPassCriteria();
  }
  // Conditional Logic needed here to check if they selected at least of one of the Special????
  if (!passLowerCase && !passUpperCase && !passNumericChar && !passSpecialChar) {
    alert("Please select at least one character type to include in your password.");
    userPassCriteria();
  }

  // Set user input in an object that will be returned out of the function for other functions to manipulate
  var userCriteriaChoices = {
    passLength: passLength,
    passLowerCase: passLowerCase,
    passUpperCase: passUpperCase,
    passNumericChar: passNumericChar,
    passSpecialChar: passSpecialChar,
  };

  return userCriteriaChoices;
}

function generatePassword() {
  var userCriteria = userPassCriteria();

  // Conditional statements read user input from object and add the associated array to our passGenArray
  // which will be used to pull random characters from.
  if (userCriteria.passLowerCase) {
    passGenArray = passGenArray.concat(lowercaseLettersArray);
  }
  if (userCriteria.passUpperCase) {
    passGenArray = passGenArray.concat(uppercaseLettersArray);
  }
  if (userCriteria.passNumericChar) {
    passGenArray = passGenArray.concat(numbersArray);
  }
  if (userCriteria.passSpecialChar) {
    passGenArray = passGenArray.concat(specialCharactersArray);
  }

  // Initialze variable that will be built out as the FOR loop cycles.
  var randPassword = "";

  for (i = 0; i < userCriteria.passLength; i++) {
    // pick a random character from the passGenArray and concat that to the randPassword variable
    // which is returned out to be printed.
    var randomCharacter = passGenArray[Math.floor(Math.random() * passGenArray.length)];
    randPassword = randPassword + randomCharacter;
  }

  return randPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Fucntion to clear arrays used in password generation
function resetApp() {
  passGenArray = [];
  passLength;
  passLowerCase = "";
  passUpperCase = "";
  passNumericChar = "";
  passSpecialChar = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
