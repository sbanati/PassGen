// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //red button

// We are not generating any value in this function right now.
//We just created this
function generatePassword() {

    console.log('lalalalla the button was clicked');



    
// Code I think I need to write. 
// Based on Acceptance Criteria 

//1. Prompt the user for password choices 
//    a. Password length = 8 to 128
//    b. Lowercase, uppercase, numbers, special characters
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
