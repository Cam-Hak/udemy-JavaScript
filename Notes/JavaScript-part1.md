# **JavaScript Fundamentals Part 1**

## *Linking Script Files*
- Usually positioned at the bottom of the body element
```html
<body>
    <script src="script.js"></script>
</body>
```
---
## *Variable Declaration*
- Camel Case (camelCase)
- Cannot start variable name with number
- Cannot contain symbols or reserved keywords
- constants in all uppercase
```js
let x = 1; // use let for mutable variables
var y = 2; // function scoped (avoid for now)
const PI = 3.1415; // use const for immutable variables
```
---
## *Template Literal*
- Similar to format strings in other languages
- Requires the use of `` and ${} for syntax
```js
const firstName = "Cameron";
console.log(`Hello my name is ${firstName}`);
```
---
## *Type Conversion*
- use the Number() function to convert to a number
    - make sure the string can be converted to numbers
    - will retrun NaN if invalid string is passed
- use the String() function to convert to a string
```js
const age = Number("21"); // valid
const birthYear = String(2003); // valid
const name = Number("Cameron"); // invalid, returns NaN
```
---
## *Equality Operators*
- '==' is the loose equality operator
    - performs type coercion and checks both values
- '===' is the strict equality operator
    - both values need to be the same type and value
    - try to use the strict equality operator as much as possible for good practice
```js
20 == 20 // true
20 == '20' // true
20 === '20' // false
```
---
## *Ternary Operator*
- transforms the traditional if else statement into an expression
- can be used in template literals or variable declaration
```js
const age = 23;

const drink = age = >= 18 ? 'wine' : 'water':
```
---