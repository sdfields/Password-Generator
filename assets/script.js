// Assignment Code
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

var criteria = {
  passwordLength: 0,
  lowerCase: true,
  upperCase: true,
  number: true,
  symbol: true,
}

var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
    var passwordArray = [];
    var finalPassword = [];
  
  if (criteria.lowerCase) {
    passwordArray = passwordArray.concat(lowerCase);
  }
  if (criteria.upperCase) {
    passwordArray = passwordArray.concat(upperCase);
  }
  if (criteria.number) {
    passwordArray = passwordArray.concat(number);
  }
  if (criteria.symbol) {
    passwordArray = passwordArray.concat(symbol);
  }

  for (let index = 0; index < criteria.passwordLength; index++) {
    finalPassword.push(passwordArray[Math.floor(Math.random() * passwordArray.length)])
  }
 
  return finalPassword.join("")

}



// Write password to the #password input

function writePassword() {
  var passwordLength = function () {
    var l = window.prompt("How many characters would you like to use?")
    if (l >= 8 && l <= 128) {
      criteria.passwordLength = l
      }  else if (l == null) {
        return;
      } else {
        window.alert("Your password does not meet the criteria.")
        passwordLength()
        return;
      }
  }

  passwordLength()

  // Lower Case

  var lowerCase = function () {
    var lc = window.confirm("Do you want to use lowercase letters?")
      criteria.lowerCase = lc
  }

  lowerCase()

  // Upper Case

  var upperCase = function () {
    var uc = window.confirm("Do you want to use uppercase letters?")
      criteria.upperCase = uc
  }

  upperCase()

  // Number 

  var number = function () {
    var n = window.confirm("Do you want to use numbers?")
      criteria.number = n
  }

  number()

  // Symbol

  var symbol = function () {
    var s = window.confirm("Do you want to use symbols?")
      criteria.symbol = s
  }

  symbol()


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// # 03 JavaScript: Password Generator

// ## Your Task

// This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// ## Mock-Up

// The following image shows the web application's appearance and functionality:

// ![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

// This Challenge is graded based on the following criteria: 

// ### Technical Acceptance Criteria: 40%

// * Satisfies all of the preceding acceptance criteria.

// ### Deployment: 32%

// * Application deployed at live URL.

// * Application loads with no errors.

// * Application GitHub URL submitted.

// * GitHub repository that contains application code.

// ### Application Quality: 15%

// * Application user experience is intuitive and easy to navigate.

// * Application user interface style is clean and polished.

// * Application resembles the mock-up functionality provided in the Challenge instructions.

// ### Repository Quality: 13%

// * Repository has a unique name.

// * Repository follows best practices for file structure and naming conventions.

// * Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

// * Repository contains multiple descriptive commit messages.

// * Repository contains quality readme file with description, screenshot, and link to deployed application.
