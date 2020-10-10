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
    return generatePassword();

 } else if (length <= 8 || length >= 128) {
   length = parseInt(window.prompt("Please choose between 8 and 128."));
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

 else if (chooseCapital && chooseLower && chooseSymbol && chooseSymbol) {
   selection = capAlphabet.concat(regAlphabet, numbers, symbols);
 }
 else if (chooseCapital) {
   selection = capAlphabet;
 }
 else if (chooseLower) {
   selection = regAlphabet;
 } 
 else if (chooseNumber) {
   selection = numbers;
 }
 else if (chooseSymbol) {
   selection = symbols;
 }
 else if (chooseCapital && chooseLower) {
   selection = capAlphabet.concat(regAlphabet);
 }
 else if (chooseCapital && chooseNumber) {
   selection = capAlphabet.concat(numbers);
 }
 else if (chooseCapital && chooseSymbol) {
   selection = capAlphabet.concat(symbols);
 }
 else if (chooseLower && chooseNumber) {
   selection = regAlphabet.concat(numbers);
 }
 else if (chooseLower && chooseSymbol) {
   selection = regAlphabet.concat(symbols);
 }
 else if (chooseNumber && chooseSymbol) {
   selection = numbers.concat(symbols);
 }
 else if (chooseCapital && chooseLower && chooseNumber) {
   selection = capAlphabet.concat(regAlphabet, numbers);
 }
 else if (choooseCapital && chooseLower && chooseSymbol) {
   selection = capAlphabet.concat(regAlphabet, symbols);
 }
 else if (chooseCapital && chooseNumber && chooseSymbol) {
   selection = capAlphabet.concat(numbers, symbols);
 }
 else if (chooseLower && chooseNumber && chooseSymbol) {
   selection = regAlphabet.concat(numbers, symbols);
 }
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
