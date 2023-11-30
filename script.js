// Assignment code here

// Defines the character attributes and password length requirements.
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numericCase = '0123456789';
const specialSymbol = '@#$%^&*()_+|}{[]></-=“';
const minPasswordLength = 8;
const maxPasswordLength = 128;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //red button


function generatePassword() {

// Password length prompt with acceptable range //
const length = prompt(" Enter Password Length between 8 and 128: ");

// Checks if the user has cancelled the password password length prompt. 
// If they do hit cancel, the alert message will display and then exit the prompt window.
if (length === null) {
  alert('You cancelled the process.☹️ I will be here when you are ready to try again. 😊')
  return;
} 


// Valididation for password length
// Checks if the password length is not a number.
//If the input is invalid, it will show an alert and exit the password generator. 
const passwordLength = parseInt(length);
  if (
    isNaN(passwordLength) ||
    passwordLength < minPasswordLength ||
    passwordLength > maxPasswordLength
  ) 
  {
      alert('You good bruh? 🤡 The password has to be between 8-128 characters 🤡BOZOOOOOO');
      return;
    
    }

    
// Follow up y/n prompts for user preferences //
const useUpperCase = confirm(" 😎 Do you want Uppercase letters my G?😎 ");
const useLowerCase = confirm(" 👑 Do you want Lowercase letters my gender neutral royalty? 👑 ");
const useNumericCase = confirm(" 🐱 Do you want to add numbers my little kitten?🐱 ");
const useSpecialSymbol = confirm( " 🏆 Do you want to use special symbols champ? 🏆 ");


    
// This builds the pool of characters to pick from that the user chose.
// Includes the variables if user chooses yes.   
let selectedCharacters = '';

if (useUpperCase) selectedCharacters += upperCase;  
if (useLowerCase) selectedCharacters += lowerCase;
if (useNumericCase) selectedCharacters += numericCase;
if (useSpecialSymbol) selectedCharacters += specialSymbol;


// Validation for at least one character type being selected. 
// Checks if character types are selected bu the user.
// If character string is empty, alert will appear and exit the password generation.
if (selectedCharacters === '') {
  alert( ' 🤡 Hey Bozo! 🤡 select at least ONE character type. 🤡');
  return;
}


// Generating the password from the user specifications 
// For loop randomly picks characters from the character pool
let customizedPassword = '';

for (let i=0; i < passwordLength; i++) {

const randomIndex = Math.floor(Math.random() * selectedCharacters.length);  
customizedPassword += selectedCharacters.charAt(randomIndex); // Adds a random character from the pool to the password.               
                                                                     
}
  

 // Returns the generatedPassword then it can be displayed. 
return customizedPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");// Card on screen

  passwordText.value = password; // Display line

}

// Add event listener to generate button
// click button to call write password function
generateBtn.addEventListener("click", writePassword); 








/* I worked along side Dan from class. We spoke out loud and broke down the starter code that was giving to us 
and tried to find out what we needed to do. This was a big help as when I first saw the code I freaked out because 
I had no clue what was going on,but calming down and approaching this line by line helped a lot. We wrote our own 
code and simply spoke out loud what we thought our next steps should be and trial and errored things on our own 
machines slowly. As we coded individually we took turns sharing our screens as we moved to code blocks or when we 
were trial and erroring when lines didnt work. We did a similar thing to the breakout rooms but we focused on our 
own code and just worked the problem out loud and shared screens when using our words was difficult since its easier 
to see what is going on.


/* I also collaborated with Jason. We both met after finishing our code to compare/contrast and see a different prespective. 
We narrated our thought processes and then we shared our thoughts on each others code. We gave positive feedback and critique. 
This was helpful to see if we needed to make any imrpovements and to also see how other coders problem solve. I learned a lot 
from this type of collaboration.*/


/* References: Ask BCS Learning Assistant. I also asked the Xpert learning assistant when I was stuck or to explain what certain 
lines did. I also used the lecture videos to go over methods we learned. */