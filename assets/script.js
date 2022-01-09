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
  // if (passLength < 8 || passLength > 128) {
  //   window.alert("Please enter a number between 8 and 128.");
  //   return false;
  // } else {
  //   return passLength;
  // }
  return passLength;
};

// Password lowercase prompt
const passLowercaseFunc = () => {
  const passLowercase = window.confirm(
    "Should the password include lowercase characters? Select OK for YES or CANCEL for NO."
  );
  return passLowercase;
};

// Password Uppercase prompt
const passUppercaseFunc = () => {
  const passUppercase = window.confirm(
    "Should the password include UPPERCASE characters? Select OK for YES or CANCEL for NO."
  );
  return passUppercase;
};

// Password numeric prompt
const passNumericFunc = () => {
  const passNumeric = window.confirm(
    "Should the password include numeric characters? Select OK for YES or CANCEL for NO."
  );
  return passNumeric;
};

// Password special characters prompt
const passSpecialFunc = () => {
  const passSpecial = window.confirm(
    "Should the password include special characters? Select OK for YES or CANCEL for NO."
  );
  return passSpecial;
};

// Generate Password function
function generatePassword() {
  // Ask user for desired password length
  const passwordLength = passLengthFunc();
  console.log(passwordLength);
  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.");
  } else {
    // Ask user if password should contain lowercase characters
    const passwordLowercase = passLowercaseFunc();
    console.log(passwordLowercase);
    // Ask user if password should contain UPPERCASE characters
    const passwordUppercase = passUppercaseFunc();
    console.log(passwordUppercase);
    // Ask user if password should contain numeric characters
    const passwordNumeric = passNumericFunc();
    console.log(passwordNumeric);
    // Ask user if password should contain special characters
    const passwordSpecial = passSpecialFunc();
    console.log(passwordSpecial);
    // Validate at least one char type selected
    if (
      !passwordLowercase &&
      !passwordUppercase &&
      !passwordNumeric &&
      !passwordSpecial
    ) {
      console.log("At least one character type must be selected.");
      window.alert("At least one character type must be selected.");
    } else {
      console.log("hi");
    }
  }
}

// Pseudo code
// Click button then

// open prompts for password criteria

// prompts:
// 1. Length 8 to 128 chars. /

// 2. lowercase /

// 3. uppercase /

// 4. numeric /

// 5. special /

// Validate At least one char type selected /

//
