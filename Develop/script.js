// Assignment Code
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var generateBtn = document.querySelector("#generate");

/*creating the generate password function*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
