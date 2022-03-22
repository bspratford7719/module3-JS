// Assignment code here
function getPasswordLength() {
  var passwordLength = window.prompt("How long would you like your password to be?")
  passwordLength = parseInt(passwordLength)
  if (passwordLength >= 8 && passwordLength <= 128){
    return passwordLength;
  } 
  else {
    window.alert("Please Enter a Value between 8-128 characters")
    return null;
  }
}

// Prompt for generated password requirements
function getCharacterTypes(type){
  var message = "Would you like to include " + type + " in your password? Enter 'yes' or 'no'"
  var includeCharType = window.prompt(message)
  if(includeCharType === 'yes') {
    return true;
  }
  if(includeCharType === 'no') {
    return false;
  }
  window.alert("Please enter 'yes' or 'no'")
  return null;
}

// Generating password per users request
function generatePasswordWithCriteria(criteria) {

  let lower = "abcdefghijk"
  let upper = "ABCDEFGHIJ"
  let numeric = "1234567890"
  let special = "():?><[]!@#$%^&*"
  let generatedPassword = ""
  
  // Selecting random characters from strings to generate password
  for(let i = 0; generatedPassword.length < criteria.passwordLength; i++) {
    if(criteria.includeLowerCase && generatedPassword.length < criteria.passwordLength) {
      generatedPassword += lower.charAt(Math.floor(Math.random() * Math.floor(lower.length - 1)))
    }
    if(criteria.includeUpperCase && generatedPassword.length < criteria.passwordLength) {
      generatedPassword += upper.charAt(Math.floor(Math.random() * Math.floor(upper.length - 1)))
    }
    if(criteria.includeNumbers && generatedPassword.length < criteria.passwordLength) {
      generatedPassword += numeric.charAt(Math.floor(Math.random() * Math.floor(numeric.length - 1)))
    }
    if(criteria.includeSpecialCharacters && generatedPassword.length < criteria.passwordLength) {
      generatedPassword += special.charAt(Math.floor(Math.random() * Math.floor(special.length - 1)))
    }
  }

  return generatedPassword;
}

// Scanning and validating requested requirements
function generatePassword(){
  console.log("Now generating password....")

  // Creating password criteria object to be generated
  let passwordCriteria = {};

  var passwordLength = getPasswordLength()
  if(passwordLength !== null) {passwordCriteria.passwordLength = passwordLength} else { return null }

  var includeLowerCase = getCharacterTypes("lowercase letters")
  if(includeLowerCase !== null) {passwordCriteria.includeLowerCase = includeLowerCase} else { return null }

  var includeUpperCase = getCharacterTypes("uppercase letters")
  if(includeUpperCase !== null) {passwordCriteria.includeUpperCase = includeUpperCase} else { return null }

  var includeNumbers = getCharacterTypes("numbers")
  if(includeNumbers !== null) {passwordCriteria.includeNumbers = includeNumbers} else { return null}

  var includeSpecialCharacters = getCharacterTypes("special characters")
  if(includeSpecialCharacters !== null) {passwordCriteria.includeSpecialCharacters = includeSpecialCharacters} else { return null }

  let generatedPassword = generatePasswordWithCriteria(passwordCriteria)
  return generatedPassword;
}

// Function to clear password to recreate new request
function clearPassword(){
  console.log("clearing password")
  var passwordText = document.querySelector("#password");
  passwordText.value = null;  
}

// Get references to the button elements
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear-password");

// Inputting password into textarea value
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to buttons
clearBtn.addEventListener("click", clearPassword);
generateBtn.addEventListener("click", writePassword);
