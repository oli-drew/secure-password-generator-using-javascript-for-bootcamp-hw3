// Password Generator

// Select the Generate Password button
const generateBtn = document.querySelector("#generate");

// Write password to the password input. Updated to arrow function
const writePassword = () => {
  resetGenerator();
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password length prompt
const passLengthFunc = () => {
  const passLength = window.prompt(
    "Password length - Please enter a number between 8 and 128: "
  );
  return passLength;
};

// Character type prompt function
const promptFunc = (type) => {
  const answer = window.confirm(
    `Should the password include ${type} characters? Select OK for YES or CANCEL for NO.`
  );
  return answer;
};

// Ask user for desired password requirements
const generatePassword = () => {
  // Ask user for desired password length
  const passwordLength = passLengthFunc();
  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.");
    resetGenerator();
  } else {
    // Ask user if password should contain lowercase characters
    const passwordLowercase = promptFunc("lowercase");
    // Ask user if password should contain UPPERCASE characters
    const passwordUppercase = promptFunc("UPPERCASE");
    // Ask user if password should contain numeric characters
    const passwordNumeric = promptFunc("numeric");
    // Ask user if password should contain special characters
    const passwordSpecial = promptFunc("special");
    // Validate at least one char type selected
    if (
      !passwordLowercase &&
      !passwordUppercase &&
      !passwordNumeric &&
      !passwordSpecial
    ) {
      // Inform user password must meet requirement and reset
      window.alert("At least one character type must be selected.");
      resetGenerator();
    } else {
      // Create password
      return createPassword(
        passwordLength,
        passwordLowercase,
        passwordUppercase,
        passwordNumeric,
        passwordSpecial
      );
    }
  }
};

// Create Password based on user requirements
const createPassword = (length, lowercase, uppercase, numeric, special) => {
  // Create password
  console.log(`Length: ${length}`);
  console.log(`Lowercase: ${lowercase}`);
  console.log(`Uppercase: ${uppercase}`);
  console.log(`Numeric: ${numeric}`);
  console.log(`Special: ${special}`);

  // All characters to be used for the password
  let allChars = "";
  // If lowercase is true add to allChars
  if (lowercase) {
    allChars = allChars + "abcdefghijklmnopqrstuvwxyz";
  }
  // If uppercase is true add to allChars
  if (uppercase) {
    allChars = allChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  // If numeric is true add to allChars
  if (numeric) {
    allChars = allChars + "0123456789";
  }
  // If special is true add to allChars
  if (special) {
    allChars = allChars + "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  }

  // Select random characters from allChars string
  let password = "";
  for (i = 0; i < length; i++) {
    password =
      password + allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
};

// Reset password generator
const resetGenerator = () => {
  console.log("Reset");
  // const passwordText = document.querySelector("#password");
  // passwordText.value = "";
};
