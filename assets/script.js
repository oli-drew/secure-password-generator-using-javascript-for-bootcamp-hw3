// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Password length prompt and validation
const passLengthFunc = () => {
  const passLength = window.prompt(
    "Password length - Please enter a number between 8 and 128: "
  );
  if (passLength < 8 || passLength > 128) {
    window.alert("Please enter a number between 8 and 128.");
  }
  return passLength;
};

// Generate Password function
function generatePassword() {
  // Ask user for desired password length
  const passwordLength = passLengthFunc();
}

// Pseudo code
// Click button then

// open prompts for password criteria

// prompts:
// 1. Length 8 to 128 chars.

// 2. lowercase

// 3. uppercase

// 4. numeric

// 5. special

// Validate At least one char type selected

//
