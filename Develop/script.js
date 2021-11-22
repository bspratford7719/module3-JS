// Assignment code here

function getpasswordLength() {
  var passwordLength = window.prompt("How long would you like your password to be?")
  if (passwordLength>=8 && passwordLength <=128){
    return passwordLength;
  } 
  else {
    window.alert("Please Enter a Value between 8-128 characters")
  }
}

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

function generatePasswordWithCriteria(criteria) {

}

function generatePassword(){
  console.log("Now generating password....")

  let passwordCriteria {};

  var passwordLength = getpasswordLength()
  if(passwordLength) {passwordCriteria.passwordLength = passwordLength} else { return null }

  var includeLowerCase = getCharacterTypes("lowercase letters")
  if(includeLowerCase) {passwordCriteria.includeLowerCase = includeLowerCase} else { return null }

  var includeUpperCase = getCharacterTypes("uppercase letters")
  if(includeUpperCase) {passwordCriteria.includeUpperCase = includeUpperCase} else { return null }

  var includeNumbers = getCharacterTypes("numbers")
  if(includeNumbers) {passwordCriteria.includeNumbers = includeNumbers} else { return null}

  var includeSpecialCharacters = getCharacterTypes("special characters")
  if(includeSpecialCharacters) {passwordCriteria.includeSpecialCharacters = includeSpecialCharacters} else { return null }

  let generatedPassword = generatePasswordWithCriteria(passwordCriteria)

  return generatedPassword;
}

function clearPassword(){
  console.log("clearing password")
  var passwordText = document.querySelector("#password");
  passwordText.value = null;  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear-password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
clearBtn.addEventListener("click", clearPassword)
generateBtn.addEventListener("click", writePassword);

