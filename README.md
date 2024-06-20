# top-test

1. **capitalize function**
    - Takes a string and returns it with the first character capitalized.

2. **reverseString function**
    - Takes a string and returns it reversed.

3. **calculator object**
    - Contains functions for basic operations:
        - **add**: Takes two numbers and returns their sum.
        - **subtract**: Takes two numbers and returns their difference.
        - **divide**: Takes two numbers and returns their quotient.
        - **multiply**: Takes two numbers and returns their product.

4. **caesarCipher function**
    - Takes a string and a shift factor, returns it with each character “shifted”.
        - **Test wrapping from z to a**: For example, `caesarCipher('xyz', 3)` should return `'abc'`.
        - **Test case preservation**: The shifted lettercase should follow the original lettercase. For example, `caesarCipher('HeLLo', 3)` should return `'KhOOr'`.
        - **Test punctuation**: Punctuations, spaces, and other non-alphabetical characters should remain unchanged. For example, `caesarCipher('Hello, World!', 3)` should return `'Khoor, Zruog!'`.
        - Consider splitting the final function into smaller helper functions. Only the public caesarCipher function needs explicit testing.

5. **analyzeArray function**
    - Takes an array of numbers and returns an object with the following properties:
        - **average**: The average of the numbers.
        - **min**: The smallest number.
        - **max**: The largest number.
        - **length**: The number of elements in the array.

    ```javascript
    const object = analyzeArray([1,8,3,4,2,6]);
    object == {
       average: 4,
       min: 1,
       max: 8,
       length: 6
    };
    ```