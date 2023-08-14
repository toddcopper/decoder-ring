// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const polybiusSquare = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I/J", "K"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"],
    ];

    const normalizedInput = input.toUpperCase();

    if (encode) {
      let encodedResult = "";
      for (let char of normalizedInput) {
        if (char === " ") {
          encodedResult += " ";
          continue;
        }

        if (char === "J") {
          char = "I"; // Replace J with I for encoding
        }

        const position = findPosition(char, polybiusSquare);
        if (position) {
          const [row, col] = position;
          encodedResult += `${col}${row}`;
        }
      }
      return encodedResult;
    } else {
      if (input.replace(/ /g, "").length % 2 !== 0) {
        return false; // Number of characters (excluding spaces) should be even
      }

      let decodedResult = "";
      let i = 0;
      while (i < normalizedInput.length) {
        if (normalizedInput[i] === " ") {
          decodedResult += " ";
          i++;
          continue;
        }

        const col = parseInt(normalizedInput[i]);
        const row = parseInt(normalizedInput[i + 1]);

        if (isNaN(row) || isNaN(col) || row > 5 || col > 5) {
          return false; // Invalid coordinate
        }

        decodedResult += getValue(row, col, polybiusSquare);
        i += 2;
      }
      return decodedResult.toLowerCase();
    }
  }

  function findPosition(char, polybiusSquare) {
    for (let row = 0; row < polybiusSquare.length; row++) {
      for (let col = 0; col < polybiusSquare[row].length; col++) {
        if (polybiusSquare[row][col].includes(char)) {
          return [row + 1, col + 1];
        }
      }
    }
    return null; // Character not found in the polybius square
  }

  function getValue(row, col, polybiusSquare) {
    const value = polybiusSquare[row - 1][col - 1];
    if (value === "I" || value === "J") {
      return "(I/J)";
    }
    return value;
  }

  return {
    polybius,
  };
})();
// console.log(polybiusModule.polybius("424222221351", false));

module.exports = { polybius: polybiusModule.polybius };