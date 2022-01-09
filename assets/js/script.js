// Password Generator
// Variables to use for password
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = lowercaseChars.toUpperCase();
const numericChars = "0123456789";
const specialChars = "~`!@£#$%^&*()_+-={}[]:\";'<>?,./|\\";

// Write password to the password input. Updated to arrow function
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  // Check password is defined
  if (password) {
    passwordText.value = password;
  }
};

// Select the Generate Password button and add click listener
const generateBtn = document.querySelector("#generate");
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
      // Inform user password must meet requirement
      window.alert("At least one character type must be selected.");
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
  // Variable to hold characters to be used for the password
  let allChars = "";
  // If lowercase is true add to allChars
  if (lowercase) {
    allChars = allChars + lowercaseChars;
  }
  // If uppercase is true add to allChars
  if (uppercase) {
    allChars = allChars + uppercaseChars;
  }
  // If numeric is true add to allChars
  if (numeric) {
    allChars = allChars + numericChars;
  }
  // If special is true add to allChars
  if (special) {
    allChars = allChars + specialChars;
  }
  // Variable to store the password
  let password = "";
  // Make passwords until one passes all the tests
  while (true) {
    // Clear password variable
    password = "";
    // Select random characters from allChars string
    for (i = 0; i < length; i++) {
      password =
        password + allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    // If the password passes all tests break the loop
    if (passChecker(password, lowercase, uppercase, numeric, special)) {
      break;
    }
  }
  // Return the password
  return password;
};

// Check the password contains all the characters specified
const passChecker = (pass, lowercase, uppercase, numeric, special) => {
  // Variables start as true incase user did not select that character type
  let lowerCheck = true;
  let upperCheck = true;
  let numericCheck = true;
  let specialCheck = true;
  if (lowercase) {
    lowerCheck = hasLowercase(pass);
  }
  if (uppercase) {
    upperCheck = hasUppercase(pass);
  }
  if (numeric) {
    numericCheck = hasNumeric(pass);
  }
  if (special) {
    specialCheck = hasSpecial(pass);
  }
  // Check if all required tests are passed
  if (lowerCheck && upperCheck && numericCheck && specialCheck) {
    return true;
  } else {
    return false;
  }
};

// Function to check for lowercase
const hasLowercase = (str) => {
  return str.toUpperCase() != str;
};

// Function to check for Uppercase
const hasUppercase = (str) => {
  return str.toLowerCase() != str;
};

// Function to check for numbers
const hasNumeric = (str) => {
  const result = numericChars.split("").some((numericChar) => {
    if (str.includes(numericChar)) {
      return true;
    }
    return false;
  });
  return result;
};

// Function to check for special characters
const hasSpecial = (str) => {
  const result = specialChars.split("").some((specialChar) => {
    if (str.includes(specialChar)) {
      return true;
    }
    return false;
  });
  return result;
};
