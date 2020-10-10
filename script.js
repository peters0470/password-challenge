// Assignment code here
capAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
regAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "+" ];

var lengths;
var chooseCapital;
var chooseLower;
var chooseNumber;
var chooseSymbol;
var selection = [];

function getRandomChar(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomChar = arr[randomIndex];
  return randomChar;
};

function generatePassword() {
var result = [];
 lengths = parseInt(window.prompt("Please pick a password length between 8 and 128 characters."));
 if (!lengths) {
   window.alert("Please pick a valid value!");
    return generatePassword();

 } else if (lengths <= 8 || length >= 128) {
   lengths = parseInt(window.prompt("Please choose between 8 and 128."));
    return generatePassword();

 } else {
   chooseCapital = window.confirm("Do you want to include capital letters?");
   chooseLower = window.confirm("Do you want to include lowercase letters?");
   chooseNumber = window.confirm("Do you want to include numbers?");
   chooseSymbol = window.confirm("Do you want to include symbols?");
 };

 if (!chooseCapital && !chooseLower && !chooseNumber && !chooseSymbol) {
   selection = window.alert("You must choose at least one option!");
   return generatePassword();
 }
if (chooseCapital) {
   selection = selection.concat(capAlphabet);
 }
if (chooseLower) {
  selection = selection.concat(regAlphabet);
}
if (chooseNumber) {
  selection = selection.concat(numbers);
}
if (chooseSymbol) {
  selection = selection.concat(symbols);
}
 for (var i = 0; i < lengths; i++) {
   var randomChar = getRandomChar(selection);
   result.push(randomChar); 
 }
 
 selection = [];
 return result.join("");
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
