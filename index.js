const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const capitalize = (word) => {
  if (typeof word !== "string") {
    throw new Error("You must provide an input of type string");
  }
  return word.toUpperCase();
};

//Turns array of words into a dictionary
const dictionary = (arr) => {
  const dict = {};

  arr.forEach((word) => {
    if (!dict[word]) {
      dictionary[word] = 1;
    } else {
      dict[word]++;
    }
  });
  return dict;
};

module.exports = { add, subtract, multiply, divide, capitalize, dictionary };
