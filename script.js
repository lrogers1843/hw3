// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lower = "abcdefghijklmnopqrstuvwxyz".split("")
var num = "1234567890".split("")
var special = "!@#$%^&*()".split("")
conditions = [upperCheck, lowerCheck, numCheck, specialCheck];
pwCharSets = [];

alert("Welcome to the password generator")

var length = getLength();

alert("Pls choose all the character types you would like in your password. You must choose at least one!")
var upperCheck = confirm("Would you like your password to contain uppercase letters?")
var lowerCheck = confirm("Would you like your password to contain lowercase letters?")
var numCheck = confirm("Would you like your password to contain numbers?")
var specialCheck = confirm("Would you like your password to contain special characters?")

if (upperCheck === false && lowerCheck === false && numCheck === false && specialCheck === false) {
    alert("sorry, you must select a character type, pls reload the page to try again!")
} else {
    if (upperCheck === true) { pwCharSets.push(upper) };
    if (lowerCheck === true) { pwCharSets.push(lower) };
    if (numCheck === true) { pwCharSets.push(num) };
    if (specialCheck === true) { pwCharSets.push(special) };
    alert("Your password is ready to generate now, just click the button to see it!")
}
// generate password
function generatePassword() {
    var pwArr = [];
    for (var i = 0; i < length; i++) {
        var randomSet = randomIntFromInterval(0, pwCharSets.length - 1);
        var charSet = pwCharSets[randomSet];
        var randomCharIndex = randomIntFromInterval(0, charSet.length - 1);
        var charChoice = charSet[randomCharIndex];
        pwArr.push(charChoice);
    }
    return pwArr.join("")

}
//random num
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// get length
function getLength() {
    var l = ""
    while (isNaN(l) === true || l < 8 || l > 128) {
        var l = prompt("How many characters would you like your password to contain? Your entry must be a number between 8 and 128")
        var l = Number(l)
    }
    return l
    alert("OK, you've chosen length " + length)
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);