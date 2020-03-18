const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)



function writePassword() {
    var passwordNow = newPass
    var passwordText = document.querySelector("#password");

    passwordText.value = passwordNow;
} 

var newPass = [];
var smalls = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",];
var Large = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M",];
var specialChar = ["#","!","@","$","%"]
var nums = ["1","2","3","4","5","6","7","8","9","0"]

passLength = prompt("pick a # between 8 and 128 please")

var selectedChoices = 4;
// var trueLength = passLength / selectedChoices;

console.log(selectedChoices);


var doSmalls = confirm("Do you want lowercase letters in your Password?")
var doLarge = confirm("Do you want uppercase letters in your new password?")
var doSpecialChar = confirm("Do you want special characters in your new password?")
var doNums = confirm("Do you want numbers in your new password?") 

function passGen(arr) {

    for (var i = 0; i < trueLength; i++) {
        var numnum = Math.floor(Math.random() * arr.length); 
        newPass.push(arr[numnum])

    }
}

if (!doSmalls) {
    // passGen(smalls);
    selectedChoices--
}
if (!doLarge) {
    // passGen(Large);
    selectedChoices--
}
if (!doSpecialChar) {
    // passGen(specialChar);
    selectedChoices--
}
if (!doNums) {
    // passGen(nums);
    selectedChoices--
}

var trueLength = passLength / selectedChoices;


if (doSmalls) {
    passGen(smalls); 
}
if (doLarge) {
    passGen(Large);
}
if (doSpecialChar) {
    passGen(specialChar);
}
if (doNums) {
    passGen(nums);
}






    // passGen(smalls);
    // passGen(Large);
    // passGen(specialChar);
    // passGen(nums);

// document.write(newPass);
