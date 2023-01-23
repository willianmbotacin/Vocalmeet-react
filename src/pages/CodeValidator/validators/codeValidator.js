/**
 * Validate code format
 * @param { String } code text to be validated
 * @returns { Object } valid/invalid information
 */
const codeValidator = (code) => {
  // Opening and closing characters must have matching indexes
  const openChars = ["<", "[", "{", "("];
  const closeChars = [">", "]", "}", ")"];
  const validChars = [...openChars, ...closeChars];
  const rootChar = "<";
  let charsCount = {};
  const stack = [];
  let isClosing = false;

  const errorMessage = {
    valid: false,
    message: 'This format is invalid.',
  }

  // Validate empty and root character
  if (code.length === 0 || code[0] !== rootChar)
    return errorMessage;

  for (const char of code) {
    // Check valid characters
    if (!validChars.includes(char))
      return errorMessage;

    // Allow only close characters after the first closing character
    if (isClosing && openChars.includes(char))
      return errorMessage;

    // Set isClosing to true when loops through the first closing character
    if (closeChars.includes(char)) {
      isClosing = true;
    }

    // Update characters count
    charsCount[char] = (charsCount[char] || 0) + 1;

    if (openChars.includes(char)) {
      // Push opening character to the stack
      stack.push(char);
    } else {
      // Check if the opening and closing characters match
      const lastChar = stack.pop();
      for (const [i, openChar] of openChars.entries()) {
        // Compare if the current character is different than it's corresponding character
        // Example: char === '>' && lastChar !== '<'
        // If it's different return error
        if (char === closeChars[i] && lastChar !== openChar) {
          return errorMessage;
        }
      }
    }
  }

  // If the stack is not empty some of the characters didn't match
  if (stack.length > 0)
    return errorMessage;

  // Valid reponse
  return {
    valid: true,
    message: 'This format is valid.',
    charsCount,
  }
}

export default codeValidator;