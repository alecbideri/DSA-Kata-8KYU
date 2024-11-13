function replace(string) {
  let newString = string.split('');
  let newWord = "";

  for (var i = 0; i < newString.length; i++) {
    // Check if the character is a number using a regular expression
    if (/[0-9]/.test(newString[i])) {
      newWord += "!";  // Replace the number with "!"
    } else {
      newWord += newString[i]; // Append the non-numeric character as is
    }
  }

  return newWord;
}

console.log(replace("Hello123")); // Expected output: "Hello!!!"
