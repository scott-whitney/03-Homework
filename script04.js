const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', WrapperTrigger)
var newPass = [];

var newPassOne = [];
var newPassTwo = [];
var newPassThree = [];
var newPassFour = [];

var trueNewPass = [];
var counter = 0;
var smalls = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",];
var Large = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M",];
var specialChar = ["#","!","@","$","%"]
var nums = ["1","2","3","4","5","6","7","8","9","0"]
function WrapperTrigger() {
    writePassword()
     TestGeneratorWrapItUp()

    function writePassword() {

        userPrompts()
        // TestGeneratorObject();
        var passwordNow = TestGeneratorObject();
    
    
        var passwordText = document.querySelector("#password");
        passwordText.value = passwordNow;
    } 
    
    
    
    
    function userPrompts() {
        userLength = prompt("Please pick a # between 8 and 128")
        if (userLength < 8 || userLength > 128){
            alert("Please enter a viable option")
        } else {
    
         userSmalls = confirm("Do you want lowercase letters?")
         userLarge = confirm("DO you want Uppercase Letters?")
         userSpecial = confirm("Do you want special characters?")
         userNums = confirm("Do you want numbers?")
    
    
        }
    }
    function TestGeneratorObject(){
        if (userSmalls){
            littleOnes = smallLetters()
            newPassOne.push(littleOnes);
            counter++
        } else {
            TestGeneratorPart2();
        }
    }
    
    function smallLetters() {
        
    var smallLettersArray = [];
        for (i = 0; i < userLength; i++)
            {
                var numnum = Math.floor(Math.random() * smalls.length); 
                smallLettersArray.push(smalls[numnum])
          
            }
    
    
    
            TestGeneratorPart2();
            return smallLettersArray;
    
    }
    
    function TestGeneratorPart2() {
        if (userLarge){
            bigOnes = UpperCases()
            newPassTwo.push(bigOnes)
            counter++
        } else {
            TestGeneratorPart3()
        }
    }
    
    function UpperCases() {
      var  UpperLettersArray = [];
        for (i = 0; i < userLength; i++) {
                var numnum = Math.floor(Math.random() * Large.length); 
                UpperLettersArray.push(Large[numnum])
             
        }
    
            TestGeneratorPart3();
            return UpperLettersArray;
    }
    
    function TestGeneratorPart3() {
        if (userSpecial){
            specialOnes = specialCharacters()
            newPassThree.push(specialOnes)
            counter++
        } else {
            TestGeneratorPart4()
        }
    }
    function specialCharacters() {
       var specialCharsArray = [];
        for (i = 0; i < userLength; i++)
            // if (userLarge === true)
            {
                var numnum = Math.floor(Math.random() * specialChar.length); 
                specialCharsArray.push(specialChar[numnum])
          
            }
    
    
            TestGeneratorPart4();
            return specialCharsArray;
    }
    
    function TestGeneratorPart4() {
        if (userNums) {
            numericalOnes = numbersTime()
            newPassFour.push(numericalOnes)
            counter++
        } else {
            // TestGeneratorWrapItUp()
        }
    }
    function numbersTime() {
      var  numbersArrayT = [];
        for (i = 0; i < userLength; i++)
           {
                var numnum = Math.floor(Math.random() * nums.length); 
                numbersArrayT.push(nums[numnum])
         
            }
    
            // TestGeneratorWrapItUp();
            return numbersArrayT;
    }
}
// function writePassword() {

//     userPrompts()
//     // TestGeneratorObject();
//     var passwordNow = TestGeneratorObject();


//     var passwordText = document.querySelector("#password");
//     passwordText.value = passwordNow;
// } 




// function userPrompts() {
//     userLength = prompt("Please pick a # between 8 and 128")
//     if (userLength < 8 || userLength > 128){
//         alert("Please enter a viable option")
//     } else {

//      userSmalls = confirm("Do you want lowercase letters?")
//      userLarge = confirm("DO you want Uppercase Letters?")
//      userSpecial = confirm("Do you want special characters?")
//      userNums = confirm("Do you want numbers?")


//     }
// }
// function TestGeneratorObject(){
//     if (userSmalls){
//         littleOnes = smallLetters()
//         newPassOne.push(littleOnes);
//         counter++
//     } else {
//         TestGeneratorPart2();
//     }
// }

// function smallLetters() {
    
// var smallLettersArray = [];
//     for (i = 0; i < userLength; i++)
//         {
//             var numnum = Math.floor(Math.random() * smalls.length); 
//             smallLettersArray.push(smalls[numnum])
      
//         }



//         TestGeneratorPart2();
//         return smallLettersArray;

// }

// function TestGeneratorPart2() {
//     if (userLarge){
//         bigOnes = UpperCases()
//         newPassTwo.push(bigOnes)
//         counter++
//     } else {
//         TestGeneratorPart3()
//     }
// }

// function UpperCases() {
//   var  UpperLettersArray = [];
//     for (i = 0; i < userLength; i++) {
//             var numnum = Math.floor(Math.random() * Large.length); 
//             UpperLettersArray.push(Large[numnum])
         
//     }

//         TestGeneratorPart3();
//         return UpperLettersArray;
// }

// function TestGeneratorPart3() {
//     if (userSpecial){
//         specialOnes = specialCharacters()
//         newPassThree.push(specialOnes)
//         counter++
//     } else {
//         TestGeneratorPart4()
//     }
// }
// function specialCharacters() {
//    var specialCharsArray = [];
//     for (i = 0; i < userLength; i++)
//         // if (userLarge === true)
//         {
//             var numnum = Math.floor(Math.random() * specialChar.length); 
//             specialCharsArray.push(specialChar[numnum])
      
//         }


//         TestGeneratorPart4();
//         return specialCharsArray;
// }

// function TestGeneratorPart4() {
//     if (userNums) {
//         numericalOnes = numbersTime()
//         newPassFour.push(numericalOnes)
//         counter++
//     } else {
//         TestGeneratorWrapItUp()
//     }
// }
// function numbersTime() {
//   var  numbersArrayT = [];
//     for (i = 0; i < userLength; i++)
//        {
//             var numnum = Math.floor(Math.random() * nums.length); 
//             numbersArrayT.push(nums[numnum])
     
//         }

//         TestGeneratorWrapItUp();
//         return numbersArrayT;
// }
function TestGeneratorWrapItUp() {
fuckingPlease = newPassOne.concat(newPassTwo, newPassThree, newPassFour);
console.log(fuckingPlease);
    // var FuckingPlease = newPass.concat(littleOnes, )
    // console.log(specialOnes)
    // var trueNewPass = [];
    for(i = 0; i < userLength; i++)
    {
        var numnum = Math.floor(Math.random() * nums.length); 
        var numnutz = Math.floor(Math.random() * counter); 
        trueNewPass.push(fuckingPlease[numnutz][numnum])
        }


        console.log(trueNewPass);
        oldNewPass = trueNewPass.join("");
        console.log(oldNewPass);
        return oldNewPass;
}


