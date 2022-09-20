// Assignment Code
var generateBtn = document.querySelector("#generate");

/*this will give a random number*/
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

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
  /*creating confirm windows that will ask about the password criteria*/
  /*creating variables with criteria*/
  var userWantsNumbers = window.confirm("Would you like to have numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to have symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to have lower case letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to have upper case letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var generatedPassword = []

  if (userWantsNumbers === true) {
    generatedPassword.push(numberList)
  }

  if (userWantsSymbols === true) {
    generatedPassword.push(symbolList)
  }

  if (userWantsLowercase === true) {
    generatedPassword.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    generatedPassword.push(uppercaseList)
  }

  var givenPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(generatedPassword)
    var randomChar = getRandomItem(randomList)
    console.log(randomChar)
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
