// Instructions:

// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// My solution:

function rot13(str: string) {
  // replace letter of the alphabet to a letter + 13 of UFT-16 code:
  return str.replace(/[a-z]/gi, (letter) =>
    // convert numbers to letters with fromCharCode
    String.fromCharCode(
      // convert letters to numbers with charCodeAt()
      // convert the letter to lower case
      // add to that letter 13 (ROT13) if below "m" (ultil x)
      // once it is at "m" we have to substract 13, because "m" is the middle of alphabet
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );
}

// console.log(rot13("SERR CVMMN!"));
