const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//takes in a sentence as a string
//returns count of letters in that sentence 

const countLetters = function (string) {
  const result = {};
  const newString = string.split(" ").join("");
  for (const letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result
};