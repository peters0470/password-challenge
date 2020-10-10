// Assignment code here
capAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
regAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "+" ];

var length;
var chooseCapital;
var chooseLower;
var chooseNumber;
var chooseSymbol;
var selection;


function generatePassword() {
 length = parseInt(window.prompt("Please pick a password length between 8 and 128 characters."));
 if (!length) {
   window.alert("Please pick a valid value!");
 }else if (length <= 8 || enter >= 128) {
   length = parseInt(window.prompt("Please choose between 8 and 128."));

 }
};
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
