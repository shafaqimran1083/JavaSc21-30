var firstName = prompt("Enter your first name:");

// Prompt the user for the last name
var lastName = prompt("Enter your last name:");

// Merge the first and last name into a new variable
var fullName = firstName + " " + lastName;

// Greet the user using their full name
alert("Hello, " + fullName + "! Nice to meet you.");
// Prompt the user for their favorite mobile phone model
var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");

// Get the length of the user input
var inputLength = favoritePhoneModel.length;

// Display the length in the browser
document.write("The length of your input is: " + inputLength);
// Define the word
var word = "Pakistani";

// Find the index of the letter "n" in the word
var index = word.indexOf("n");

// Display the index in the browser
document.write("The index of 'n' in the word 'Pakistani' is: " + index);
// Define the word
var word = "Hello World";

// Find the last index of the letter "l" in the word
var lastIndex = word.lastIndexOf("l");

// Display the last index in the browser
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);
// Define the word
var word = "Pakistani";

// Find the character at the 3rd index in the word
var character = word.charAt(3);

// Display the character in the browser
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);
// Prompt the user for the first name
var firstName = prompt("Enter your first name:");

// Prompt the user for the last name
var lastName = prompt("Enter your last name:");

// Concatenate the first and last name into a new variable
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "! Nice to meet you.");
// Define the word
var word = "Hyderabad";

// Replace "Hyder" with "Islam" in the word
var replacedWord = word.replace("Hyder", "Islam");

// Display the replaced word in the browser
document.write("The replaced word is: " + replacedWord);
// Define the string
var sentence = "I like cats and dogs and birds and fish.";

// Replace all occurrences of "and" with "&" in the string
var replacedSentence = sentence.replace(/and/g, "&");

// Display the replaced sentence in the browser
document.write("The replaced sentence is: " + replacedSentence);
// Define the string
var str = "274";

// Convert the string to a number
var num = Number(str);

// Display the values and types in the browser
document.write("Original value: " + str + "<br>");
document.write("Type of original value: " + typeof str + "<br>");
document.write("Converted value: " + num + "<br>");
document.write("Type of converted value: " + typeof num);
// Prompt the user for input
var userInput = prompt("Enter your input:");

// Convert the input to capital letters
var capitalizedInput = userInput.toUpperCase();

// Display the capitalized input in the browser
document.write("Capitalized input: " + capitalizedInput);
// Prompt the user for input
var userInput = prompt("Enter your input:");

// Convert the input to title case
var titleCaseInput = toTitleCase(userInput);

// Display the title case input in the browser
document.write("Title case input: " + titleCaseInput);

// Function to convert a string to title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/^(.)|\s+(.)/g, function(match) {
    return match.toUpperCase();
  });
}
// Define the variable num
var num = 35.36;

// Convert num to a string
var numString = num.toString();

// Remove the dot from the string
var numWithoutDot = numString.replace(".", "");

// Display the result in the browser
document.write("Result: " + numWithoutDot);
// Prompt the user to enter a username
var username = prompt("Enter your username:");

// Define the array of special symbols
var specialSymbols = ['@', '.', ',', '!'];

// Function to check if a string contains any special symbols
function hasSpecialSymbols(str) {
  for (var i = 0; i < specialSymbols.length; i++) {
    if (str.includes(specialSymbols[i])) {
      return true;
    }
  }
  return false;
}

// Check if the username contains any special symbols
while (hasSpecialSymbols(username)) {
  username = prompt("Enter a valid username without special symbols (@, ., ,, !):");
}

// Display the valid username in the browser
document.write("Valid username: " + username);
// Define the array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
var userInput = prompt("Enter an item to search:");

// Function to perform case-insensitive search
function searchItem(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === item.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// Perform the search and display the result
if (searchItem(A, userInput)) {
  alert("Yes, the item \"" + userInput + "\" is found in the list.");
} else {
  alert("No, the item \"" + userInput + "\" is not found in the list.");
}
// Prompt the user to enter a password
var password = prompt("Enter a password:");

// Function to check if the password meets the requirements
function isValidPassword(pwd) {
  // Check if the password contains alphabets and numbers
  var hasAlphabet = /[a-zA-Z]/.test(pwd);
  var hasNumber = /[0-9]/.test(pwd);

  // Check if the password does not start with a number
  var startsWithNumber = /^[0-9]/.test(pwd);

  // Check if the password is at least 6 characters long
  var isLongEnough = pwd.length >= 6;

  // Return true if the password meets all requirements, false otherwise
  return hasAlphabet && hasNumber && !startsWithNumber && isLongEnough;
}

// Check if the password is valid
while (!isValidPassword(password)) {
  password = prompt("Enter a valid password that meets the requirements:\n- Contains alphabets and numbers\n- Does not start with a number\n- Is at least 6 characters long");
}

// Display a success message in the browser
document.write("Valid password: " + password);
// Define the string
var university = "University of Karachi";

// Convert the string to an array using split method
var universityArray = university.split(" ");

// Display the elements of the array in the browser
for (var i = 0; i < universityArray.length; i++) {
  document.write("Element " + (i + 1) + ": " + universityArray[i] + "<br>");
}
// Prompt the user for input
var userInput = prompt("Enter a string:");

// Get the last character of the input
var lastCharacter = userInput.charAt(userInput.length - 1);

// Display the last character in the browser
document.write("Last character: " + lastCharacter);
// Prompt the user for a positive integer
var userInput = prompt("Enter a positive integer:");

// Convert the user input to a number
var number = parseInt(userInput);

// Calculate the round off value
var roundOff = Math.round(number);

// Calculate the floor value
var floorValue = Math.floor(number);

// Calculate the ceil value
var ceilValue = Math.ceil(number);

// Display the results in the browser
document.write("Number: " + number + "<br>");
document.write("Round off value: " + roundOff + "<br>");
document.write("Floor value: " + floorValue + "<br>");
document.write("Ceil value: " + ceilValue + "<br>");
// Prompt the user for a negative floating-point number
var userInput = prompt("Enter a negative floating-point number:");

// Convert the user input to a number
var number = parseFloat(userInput);

// Check if the number is negative
if (number < 0) {
  // Calculate the round off value
  var roundOff = Math.round(number);

  // Calculate the floor value
  var floorValue = Math.floor(number);

  // Calculate the ceil value
  var ceilValue = Math.ceil(number);

  // Display the results in the browser
  document.write("Number: " + number + "<br>");
  document.write("Round off value: " + roundOff + "<br>");
  document.write("Floor value: " + floorValue + "<br>");
  document.write("Ceil value: " + ceilValue + "<br>");
} else {
  // Display an error message if the number is not negative
  document.write("Invalid input! Please enter a negative floating-point number.");
}
// Prompt the user for a number
var userInput = prompt("Enter a number:");

// Convert the user input to a number
var number = parseFloat(userInput);

// Calculate the absolute value of the number
var absoluteValue = Math.abs(number);

// Display the absolute value in the browser
document.write("Absolute value: " + absoluteValue);
// Simulate a dice roll
var diceValue = Math.floor(Math.random() * 6) + 1;

// Display the dice value in the browser
document.write("Dice Value: " + diceValue);
// Simulate a coin toss
var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";

// Display the coin value in the browser
document.write("Coin Value: " + coinValue);
// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write("Random Number: " + randomNumber);
// Prompt the user for their weight
var userInput = prompt("Enter your weight:");

// Parse the user input to extract the weight value
var weight = parseFloat(userInput);

// Display the weight in the browser
document.write("Weight: " + weight + " kgs");
// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number between 1 and 10
var userInput = prompt("Guess the secret number (between 1 and 10):");
var userNumber = parseInt(userInput);

// Check if the user input matches the secret number
if (userNumber === secretNumber) {
  // Congratulate the user if the input matches the secret number
  document.write("Congratulations! You guessed the secret number.");
} else {
  // Inform the user that the guess was incorrect
  document.write("Sorry, that's not the secret number. Try again.");
}