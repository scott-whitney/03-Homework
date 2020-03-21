const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)
var newPass = [];
var smalls = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",];
var Large = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M",];
var specialChar = ["#","!","@","$","%"]
var nums = ["1","2","3","4","5","6","7","8","9","0"]

function writePassword(); {
var passwordNow = genPass();

var passwordText = document.querySelector("#password");
var selectedChoices = 4;
passwordText.value = passwordNow;

}

function genPass() {

    userLength = prompt("Please input a nuber between 8 and 128");

    var doSmalls = confirm("Do you want lowercase letters in your Password?")
    var doLarge = confirm("Do you want uppercase letters in your new password?")
    var doSpecialChar = confirm("Do you want special characters in your new password?")
    var doNums = confirm("Do you want numbers in your new password?") 

    if (doSmalls) {
        doSmallLetter();
        
    }
    if (doLarge) {
        doLargeLetter();
        
    }   
    if (doSpecialChar) {
        doSpecial();
        
    }
    if (doNums) {
        doNumberFunc();
        
    }
}



function doSmallLetter() {
    for ( i = 0; i < userLength; i++) {
        var numnum = Math.floor(Math.random() * smalls.length); 
        newPass.push(smalls[numnum]);

}

function doLargeLetter(){
    var numnum = Math.floor(Math.random() * Large.length); 
    newPass.push(Large[numnum]);

}

function doSpecial() {

}

function doNumberFunc() {

}