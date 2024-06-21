function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function reverseString(givenString) {
  let stringArray = givenString.split("");

  return stringArray.reverse().join("");
}

function calculator(num1, num2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        throw new Error("Cannot divide by 0!");
      } else {
        result = num1 / num2;
      }
      break;
  }
  return result;
}

function caesarCipher(givenString, shiftFactor) {
  let stringArr = [];
  let punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()?]/g;
  let moddedShiftFactor = shiftFactor % 26;

  // Go through each char
  for (let i = 0; i < givenString.length; i++) {
    // Check for space
    if (givenString[i] === " ") {
      stringArr.push(" ");
      continue;
      // Check for punctuation
    } else if (givenString[i].match(punctuationRegex)) {
      stringArr.push(givenString[i]);
      continue;
    }

    // Shift letter
    let charCode = givenString.charCodeAt(i);
    let newChar = shiftHelper(charCode, moddedShiftFactor);
    stringArr.push(newChar);
  }

  return stringArr.join("");
}

function shiftHelper(charCode, shiftFactor) {
  let newChar;
  let newCode = charCode + shiftFactor;
  let upperCaseLowerBound = 65;
  let upperCaseUpperBound = 90;
  let lowerCaseLowerBound = 97;
  let lowerCaseUpperBound = 122;
  // handle uppercase
  if (charCode >= upperCaseLowerBound && charCode <= upperCaseUpperBound) {
    // if charCode + shiftFactor <= 90 make newChar from that
    // otherwise, we need to take charCode + shiftFactor - 90 + 65;
    newChar =
      newCode <= 90
        ? String.fromCharCode(newCode)
        : String.fromCharCode(
            upperCaseLowerBound - 1 + (newCode % upperCaseUpperBound)
          );
    // handle lowercase
  } else if (
    charCode >= lowerCaseLowerBound &&
    charCode <= lowerCaseUpperBound
  ) {
    newChar =
      newCode <= 122
        ? String.fromCharCode(newCode)
        : String.fromCharCode(
            lowerCaseLowerBound - 1 + (newCode % lowerCaseUpperBound)
          );
  }
  return newChar;
}

function analyzeArray(givenArr) {
  let average =
    givenArr.reduce((prev, curr) => prev + curr, 0) / givenArr.length;
  return {
    average,
    max: Math.max(...givenArr),
    min: Math.min(...givenArr),
    length: givenArr.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
