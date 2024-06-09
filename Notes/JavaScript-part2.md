# **JavaScript Fundamentals Part 2**

## *Functions*
- Similar syntax to other languages
- Can be saved into variables
- arrow syntax
```js
function helloWorld {
    console.log("Hello World!");
}

const hello = function {
    console.log("Hello World!");
}

const hello = () => console.log("Hello World!");
```
---
## *Arrays*
- object type
- use brackets for literal syntax
- you can change values of an array regardless of it being a "const" variable
```js
// same arrays, different methods of implementation
const friends1 = ['Cameron', 'Steven', 'Peter'];
const friends2 = new Array('Cameron', 'Steven', 'Peter');
```
---
## *Array Methods*
- .push(newData)
    - adds data to the end of the array
    - returns the new length of the array
- .unshift(newData)
    - adds data to the beginning of the array
```js
const friends = ['Cameron', 'Steven', 'Peter'];
friends.push("John");
// ['Cameron', 'Steven', 'Peter', 'John']
friends.unshift("Jim");
// ['Jim', 'Cameron', 'Steven', 'Peter', 'John']
```
- .pop()
    - removes the last element of the array
    - can save the popped element to a variable
- .shift()
    - removes the first element in the array
```js
const friends = ['Cameron', 'Steven', 'Peter'];
friends.pop();
// ['Cameron', 'Steven']
friends.shift();
// ['Steven']
```
- .indexOf(elementToFind)
    - finds the index of the element to find in the array
    - return -1 if the element doesn't exist
- .includes(elementToFind)
    - returns true or false if the element is found in the array
```js
const friends = ['Cameron', 'Steven', 'Peter'];
friends.indexOf('Cameron');
// 0
friends.includes('Peter');
// true
```
---
## *Objects*
- data structure for unordered key value pairs
- can get and add values by passing keys in bracket and dot notation
```js
const cameronObject = {
    firstName: 'Cameron',
    lastName: 'Hakenson',
    age: 2024 - 2003,
    job: 'dev',
};

cameronObject.location = 'Virginia';

console.log(cameronObject.firstName); // "Cameron"
console.log(cameronObject['location']); // "Virginia"
```
---
## *Object Methods*
- you can pass function expressions as a key value pair in the literal definition for the object
- your method can use other key value pairs in the object using the "this" keyword
```js
const cameronArray = {
    firstName: 'Cameron',
    lastName: 'Hakenson',
    birthYear: 2003,
    job: 'dev',

    // creating a new property within the method saves a lot of time if you need to access the result multiple times
    calcAge: function (currentYear) {
        this.age = currentYear - this.birthYear;
        return this.age;
    }
};

console.log(cameronArray.age); // 21
```
