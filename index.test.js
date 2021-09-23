const {
  add,
  subtract,
  multiply,
  divide,
  capitalize,
  dictionary,
} = require("./index.js");

describe("Math fuctions", () => {
  test("Adding 1+1 = 2", () => {
    expect(add(1, 1)).toBe(2);
  });

  test("Multiplying 1*2 = 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });

  test("Subtracting 1 - 1 equals 0", () => {
    expect(subtract(1, 1)).toBe(0);
  });
  test("Dividing 1 / 1 equals 1", () => {
    expect(divide(1, 1)).toBe(1);
  });
});

describe("Language", () => {
  //When testing throws, wrap function in arrow function, otherwise error won't be caught & assertion will fail
  //argument given to toThrow is also optional, but can test if a specific error is thrown
  test("Input should be a string", () => {
    expect(() => {
      capitalize(1);
    }).toThrow(/type string/);
  });

  // const obj1 = {
  //   a: 1,
  //   b: 1,
  //   c: 1,
  //   d: 1,
  // };
  // test("Dictionary converts array of words into an object with unique keys", () => {
  //   const result = dictionary(["a", "b", "c", "d"]);
  //   expect(result).toEqual(obj1);
  // });
});
