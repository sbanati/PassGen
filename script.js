// Assignment code here


const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|}{[]></-=“';
const min_Password_Length = 8;
const max_Password_Length = 128;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //red button

// We are not generating any value in this function right now.
//We just created this
function generatePassword() {

  // These are the prompts // Scopes
const length = prompt(" Enter Password Length between 8 and 128: ");

// Makes it so if you hit cancel before making a choice you get a cancel message.
// I tried if else statement to prevent the second alert from showing up when hitting cancel,
// but this made the length variable inside the block and broke the password generator. 
// Instead I added return to exit early and made sure pass length was defined outside the block.
if (length === null) {
  alert('You cancelled the process.☹️ I will be here when you are ready to try again. 😊')
  return;
} 

// Valididation for password length 
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

    
// Follow up y/n prompts 
// useUpperCase is a variable representing the boolean True/False statment of the users
// choice to include uppercase letters. The upperCase is a const string of the charactrers.
// These useVariables are storing the users choice. 
const useUpperCase = confirm(" 😎 Do you want Uppercase letters my G?😎 ");
const useLowerCase = confirm(" 👑 Do you want Lowercase letters my gender neutral royalty? 👑 ");
const useNumber = confirm(" 🐱 Do you want to add numbers my little kitten?🐱 ");
const useSymbol = confirm( " 🏆 Do you want to use symbols champ? 🏆 ");


    
// This builds the pool of characters to pick from that the user chose.
// This ties the 2 above sections together. Transfering the const string data into the 
// variables titled characters. Characters is the container, and if the boolean is TRUE 
// then the data from the const string is added to the characters variable. 
//Concat operator += is used to build on the characeter variable , so it adds to the existing 
// values instead of just overwriting them.  

let characters = '';

if (useUpperCase) characters += upperCase;  
if (useLowerCase) characters += lowerCase;
if(useNumber) characters += number;
if (useSymbol) characters += symbol;


// Validation for at least one character type being selected. 

if (characters === '') {
  alert( ' 🤡 Hey Bozo! 🤡 select at least ONE character type. 🤡');
  return;
}







// Code I think I need to write. 
// Based on Acceptance Criteria 

// connect the data from the const strings to the boolean use variables
//2.  We need Validation of the input.
//3.  Display the password that we generated on the page.





  return 'The generated password will go here.';
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // <--what is this? We need to make this function.
  var passwordText = document.querySelector("#password");// Card on screen

  passwordText.value = password; // Display line

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // click button to call write password function









// writePassword func is waiting for a value 
// from generatePassword 
// and then that value is stored into password 
// and then password is stored into passwordText.value
// That line tests that the password text will appear in the box
// Event listener is working, connection is good. At the end 
// we are supposed to return a generated password at the end of  code 
// So whatever generated password is will be stored in a variable
// and then called by the return line. 
