// Assignment code here

// Defines the character attributes and password length requirements.
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|}{[]></-=“';
const min_Password_Length = 8;
const max_Password_Length = 128;


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
    passwordLength < min_Password_Length ||
    passwordLength > max_Password_Length
  ) 
  {
      alert('You good bruh? 🤡 The password has to be between 8-128 characters 🤡BOZOOOOOO');
      return;
    
    }

    
// Follow up y/n prompts for user preferences //
const useUpperCase = confirm(" 😎 Do you want Uppercase letters my G?😎 ");
const useLowerCase = confirm(" 👑 Do you want Lowercase letters my gender neutral royalty? 👑 ");
const useNumber = confirm(" 🐱 Do you want to add numbers my little kitten?🐱 ");
const useSymbol = confirm( " 🏆 Do you want to use symbols champ? 🏆 ");


    
// This builds the pool of characters to pick from that the user chose.
// Includes the variables if user chooses yes.   
let characters = '';

if (useUpperCase) characters += upperCase;  
if (useLowerCase) characters += lowerCase;
if(useNumber) characters += number;
if (useSymbol) characters += symbol;


// Validation for at least one character type being selected. 
// Checks if character types are selected bu the user.
// If character string is empty, alert will appear and exit the password generation.
if (characters === '') {
  alert( ' 🤡 Hey Bozo! 🤡 select at least ONE character type. 🤡');
  return;
}



// Generating the password from the user specifications 
// For loop randomly picks characters from the character pool
let generatedPassword = '';

for (let i=0; i < passwordLength; i++) {

const randomIndex = Math.floor(Math.random() * characters.length);  
generatedPassword += characters.charAt(randomIndex); // Adds a random character from the pool to the password.               
                                                                     
}
  

 // Returns the generatedPassword then it can be displayed. 
return generatedPassword;

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








