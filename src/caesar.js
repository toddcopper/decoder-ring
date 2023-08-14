// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift <= -25 || shift > 25) {
      return false;
    }

    const direction = encode ? 1 : -1;
    const shiftedStr = input.replace(/[A-Za-z]/g, function (charObj) {
      let char = charObj.toLowerCase()
      let code = char.charCodeAt(0);
      let shiftedCode = code + shift * direction;

      if (char >= "a" && char <= "z") {
        shiftedCode = ((((shiftedCode - 97) % 26) + 26) % 26) + 97;
      }

      return String.fromCharCode(shiftedCode);
    });

    // console.log(shiftedStr);
    return shiftedStr;
  }

  return {
    caesar,
  };
})();

const inputString = "Zebra";
const shiftAmount = 3;

let shiftedString = caesarModule.caesar(inputString, shiftAmount);
console.log(shiftedString);


module.exports = { caesar: caesarModule.caesar };
