// Assignment Code
function generatePassword() {
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var spaceCharacter = [];
  
    // Password input prompt
    numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      return "Must have a valid number of characters to proceed.";
    } else if (isNaN(numberOfCharacters)) {
      numberOfCharacters = prompt("Please enter a valid number.");
    }
    else {
      alert("Your password will be " + numberOfCharacters + " characters long.");
    hasLowercase = confirm("Do you want lowercase characters?");
    hasUppercase = confirm("Do you want uppercase characters?");
    hasNumbers = confirm("Do you want to use numbers?");
    hasSpecial = confirm("Do you want special characters?");
    };

    if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
      return "You must choose one or more of the options given.";
    };
  
    // The "if" selectors 
    if (hasLowercase) {
      spaceCharacter = spaceCharacter.concat(lowercase);
    }
    if (hasUppercase) {
      spaceCharacter = spaceCharacter.concat(uppercase);
    }
    if (hasNumbers) {
      spaceCharacter = spaceCharacter.concat(numeric);
    }
    if (hasSpecial) {
      spaceCharacter = spaceCharacter.concat(specialCharacters);
    }
    // Random selection of the chosen characters
    let finalPassword = ""
    for (let i = 0; i < numberOfCharacters; i++) {
      let rng =[Math.floor(Math.random() * spaceCharacter.length)];
      finalPassword = finalPassword + spaceCharacter[rng];
    }
    return finalPassword;
  };

  var generateBtn = document.querySelector("#generate");
  
  // Write password 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);