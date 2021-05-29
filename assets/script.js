// Assignment code here

   const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split()
   const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split()
   const number = '0123456789'.split()
   const special = '!@#$%^&*();<>?'.split()
   var passwordLength
   var myGaruntee
   var myPassword = ''
   
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPasswordChoices() {
  passwordLength = window.prompt("How many characters do you want your password? 8-128");
  console.log (passwordLength)
  

var lowerCase;
if (confirm("Do you want lowercase letters in your password?")) {
  alert("You will have lowercase letters!");
  var loweryes = true;
  console.log(loweryes)
} else {
  alert("You will not have lowercase letters!");
  var loweryes= false;
  console.log(loweryes)
}

var upperCase;
if (confirm("Do you want uppercase letters in your password?")) {
  alert("You will have uppercase letters!");
  var upperyes = true;
  console.log(upperyes)
} else {
  alert("You will not have lowercase letters!");
  var upperyes = false;
  console.log(upperyes)
}

var numeric;
if (confirm("Do you want numeric characters in your password?")) {
  alert("You will have numeric characters!");
  var numyes = true;
  console.log(numyes)
} else {
  alert("You will not have numeric characters!");
  var numyes= false;
  console.log(numyes)
}

var specialChar;
if (confirm("Do you want special characters in your password?")) {
  alert("You will have special characters!");
  var specialyes= true;
  console.log(specialyes)
} else {
  alert("You will not have special characters!");
  var specialyes = false;
  console.log(specialyes)
}
var components = {
  passwordLength: passwordLength,
  loweryes: loweryes,
  upperyes: upperyes,
  numyes: numyes,
  specialyes: specialyes
}
  return components;
}

function generatePassword() {
  var passwordOptions = getPasswordChoices()
    var possibleCharacters = []
    var garuntee = []
  var thePassword = []
  if (passwordOptions.loweryes) {
    possibleCharacters =  possibleCharacters.concat(lowercase);
    console.log(`This is  possibleCharacgters ${possibleCharacters}`)
    console.log(`this is ${lowercase}`)
    garuntee.push(lowercase)
    console.log(`This is the guarantee${garuntee}`)
  } 

  if (passwordOptions.upperyes) {
    possibleCharacters =  possibleCharacters.concat(uppercase);
    garuntee.push(uppercase)
    console.log(`This is the guarantee${garuntee}`)
  } 

  if (passwordOptions.numyes) {
    possibleCharacters =  possibleCharacters.concat(number);
    garuntee.push(number)
  } 

  if (passwordOptions.specialyes) {
    possibleCharacters =  possibleCharacters.concat(special);
    garuntee.push(special)
    console.log(`This is the FINAL  guarantee${garuntee}`)
  }


  myGaruntee= garuntee.join('')
  console.log(`This is myGarun`)
  console.log(myGaruntee);
 
  for (var i=0; i < passwordLength; i++) {
    myPassword += myGaruntee.charAt(Math.floor(Math.random() * myGaruntee.length));
    console.log(`${i},${myPassword}`)
  }
  return myPassword
/* End of generate password function*/

/*function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  console.log(randElement)
  return randElement;*/

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)