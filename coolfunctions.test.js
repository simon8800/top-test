import {
  caesarCipher,
  calculator,
  capitalize,
  reverseString,
  analyzeArray,
} from "./coolfunctions";

// capitalize
describe("capitalize", () => {
  test("Capitalize D in dog", () => expect(capitalize("dog")).toBe("Dog"));
});

// reverseString
describe("reverseString", () => {
  test("Reverse dog", () => expect(reverseString("dog")).toBe("god"));
  test("Reverse hello there", () =>
    expect(reverseString("hello there")).toBe("ereht olleh"));
  test("Reverse rockstar!", () =>
    expect(reverseString("rockstar!")).toBe("!ratskcor"));
});

// calculator
describe("calculator", () => {
  test("Addition", () => expect(calculator(1, 2, "+")).toBe(3));
  test("Subtraction", () => expect(calculator(5, 10, "-")).toBe(-5));
  test("Multiplication", () => expect(calculator(10, 18, "x")).toBe(180));
  test("Division", () => expect(calculator(10, 2, "/")).toBeCloseTo(5));
  test("Dividing by 0 throws an error", () =>
    expect(() => calculator(10, 0, "/")).toThrow("Cannot divide by 0!"));
});

// caesarCipher
describe("caesarCipher", () => {
  test("Shift by 3", () => expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"));
  test("Case preservation", () =>
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));
  test("Wrapping", () => expect(caesarCipher("xyz", 3)).toBe("abc"));
  test("Punctuation", () =>
    expect(caesarCipher("!?Hello, World!", 3)).toBe("!?Khoor, Zruog!"));
});

describe("analyzeArray; testArray = [1, 8, 3, 4, 2, 6]", () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  test("Average", () => expect(analyzeArray(testArray)["average"]).toBe(4));
  test("Min", () => expect(analyzeArray(testArray)["min"]).toBe(1));
  test("Max", () => expect(analyzeArray(testArray)["max"]).toBe(8));
  test("Length", () => expect(analyzeArray(testArray)["length"]).toBe(6));
});
