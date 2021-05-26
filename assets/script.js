// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generateBtn() {
  var characterNumber = window.prompt("How many characters do you want your password? 8-128")
  
  var lowerCase;
  if (confirm("Do you want lowercase letters in your password?")) {
    window.prompt("You will have lowercase letters!");
  } else {
    window.prompt("You will not have lowercase letters!");
  }

  var upperCase;
  if (confirm("Do you want uppercase letters in your password?")) {
    window.prompt("You will have uppercase letters!");
  } else {
    window.prompt("You will not have lowercase letters!");
  }

  var numeric;
  if (confirm("Do you want numeric characters in your password?")) {
    window.prompt("You will have numeric characters!");
  } else {
    window.prompt("You will not have numeric characters!");
  }

  var specialChar;
  if (confirm("Do you want special characters in your password?")) {
    window.prompt("You will have special characters!");
  } else {
    window.prompt("You will not have special characters!");
  }
}

Math.random().toString(characterNumber).replace('0.', '') 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
