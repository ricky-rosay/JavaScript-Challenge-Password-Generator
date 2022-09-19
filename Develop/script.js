// Assignment Code
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var generateBtn = document.querySelector("#generate");

/*creating the generate password function*/
/*within return i will have a var in which it will display the actual generated password*/
/*window.prompt will bring up a window that will display my choice of text*/

function generatePassword() {
  
  var userInput = window.prompt("How long would you like your password to be?")
/*parseInt looks to see if the input is a string or integer*/
  var passwordLength = parseInt(userInput)
/*if the input is NaN (not a number) then a window will pop up and give a message*/
  if (isNaN(passwordLength)) {
    window.alert("Sorry, but that is not a number.")
    return
  }
/*if the pass length is not within the criteria another message will pop up*/
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a password length between 8 and 128 characters.")
    return
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*write generate password function*/
/*proimpt user wiht passsword criteria*/
/*pass length of 8<128*/
/*pass needs to have lower and upper case, numeric, or special characters*/
/*validate the input*/
/*generate the actual password*/
/*display password to the page using the return in the genpass function*/
/**/
/**/
/**/
