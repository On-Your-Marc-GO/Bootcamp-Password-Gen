// Assignment Code
var generateBtn = document.querySelector("#generate");
var passGenArray = [];
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

// Write password to the #password input
function userPassCriteria() {
  var passLength = prompt("How many characters would you like your password to be?\r\n(Valid Password Length is between 8-128 characters.)");

  // Catch the user input and ensure it's correct ?????
  // if (passLength < 8 || passLength > 128) {
  //   alert("Your selected password length has to be at least 8 characters and no more than 128.");
  //   passLength = prompt("Again, how many characters would you like your password to be?\r\n(Valid Password Length is between 8-128 characters.)");
  // }

  var passLowerCase = confirm("Would you like your password to contain lowercase characters?");
  var passUpperCase = confirm("Would you like your passowrd to contain uppercase characters?");
  var passNumericChar = confirm("Would you like your password to contain numbers?");
  var passSpecialChar = confirm("Would you like your password to contain special characters?\r\n(Ex. $, %, &, @)");

  // Conditional Logic needed here to check if they selected at least of one of the Special????
  // if ((passLowerCase, passUpperCase, passNumericChar, passSpecialChar === false){
  //   alert("Pick an option dummy.");
  // }

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

  if (userCriteria.passLowerCase) {
    passGenArray = passGenArray.concat(lowercaseLettersArray);
  }
  if (userCriteria.passUpperCase) {
    passGenArray = passGenArray = passGenArray.concat(uppercaseLettersArray);
  }
  if (userCriteria.passNumericChar) {
    passGenArray = passGenArray = passGenArray.concat(numbersArray);
  }
  if (userCriteria.passSpecialChar) {
    passGenArray = passGenArray = passGenArray.concat(specialCharactersArray);
  }

  for (i = 0; i < userCriteria.passLength; i++) {
    //Write the logic on each loop to pick a random character from the passGenArray
    var randomCharacter = passGenArray[Math.floor(Math.random() * passGenArray.length)];
    var randPassword = randPassword + randomCharacter;
  }
  // Returning UNDEFINED??? Where is that coming from?
  console.log(randPassword);
  return randPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//MIGHT NEED TO DO A RESET STATS TYPE FUNCTION AFTER A PASSWORD IS GENERATED TO CLEAR OUR ARRAYS. ETC.
