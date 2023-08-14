// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet="", encode = true) {
    // your solution code here

    // Check if the alphabet has exactly 26 unique characters
    if (alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const sourceAlphabet = encode ? standardAlphabet : alphabet;
    const targetAlphabet = encode ? alphabet : standardAlphabet;

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      let encodedChar = char;

      if (char === " ") {
        result += " ";
        continue;
      }

      const index = sourceAlphabet.indexOf(char.toLowerCase());

      if (index !== -1) {
        encodedChar = targetAlphabet[index];
      }

      result += encodedChar;
    }

    return result;
  }

  return {
    substitution,
  };
})();

// const message = "ysii.rs";
// const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
// console.log(substitutionModule.substitution(message, alphabet, false));

module.exports = { substitution: substitutionModule.substitution };
