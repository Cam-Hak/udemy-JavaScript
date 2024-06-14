# **Data Structures, Modern Operators, and Strings**

## _Destructuring Arrays_

- An efficient way to assigning multiple variables to indexes in an array
- You can skip an element by an empty comma

```js
const arr = [1, 2, 3];
const [x, y, z] = arr;

console.log(x, y, z); // 1 2 3
```

**Adding Default Values When Destructuring**

- This is a more full proof way of destructuring your data
- You don't always know what the data looks like

```js
const arr = [1, 2];
// defaulting z to 0 prevents an unknown bug or error from occuring
const [x, y, z = 0] = arr;
```

---

## _Destructuring Objects_

- Similar to destructuring arrays
- objects aren't in a specific order so now ordering is needed

```js
const obj = {
  name: "Cameron",
  age: 20,
  job: "Dev",
};
// still defaulting each value for good practice
const { name: firstName = "", age: yearsOld = 0, job: currentJob = "" } = obj;
```

**Mutating Variables into Object Data**

- Needs to be wrapped in parenthesis or else Syntax Error

```js
// assume same object as above
name = "Michael";
age = 30;

// without parenthesis this would throw a syntax error
({ name, age } = obj);
```

**Nested Objects**

```js
const person = {
    cameron: {
        name: "Cameron",
        age: 20;
    }
}

const {person: {name, age}} = person;
```

---
## _The Spread and Rest Operator_
- use three dots in front of an array name to give access to each individual element
- the spread operator unpacks data
    - used on the right side of the equals sign
- the rest operator packs data
    - used on the left side of the equals sign
```js
const arr = [1, 2, 3, 4];
console.log(...arr);

[x, y, ...others] = arr;
// prints 1 2 3 4
```
---
## _Short Circuiting_
- Allows you to set a default value to certain parts of your code
- When using OR, the first value is returned if its a truthy value
- You can use AND to only run a function if the first value is truthy
```js
const name = null;
console.log(name || 'Cam'); // first value is falsy, so it will print the truthy value

name = 'Cameron';
name && giveFood(name, 'pizza');
```

**Nullish Coalescing Operator**
- Treats 0s and empty strings as truthy values
- Treats null and undefined as falsy values

**Logical Assignment Operators**
- Same context as above, but used to assign values to variables
```js
const name = null;
name ??= 'Cameron';
// sets name to Cameron if it wasn't previously set
```
---
## _For-of Loop_
- Considered to be an enhanced for-loop in java
- You can use the .entries() function to get access to the arrays indices as well as the elements
```js
const arr = [1, 2, 3, 4];
// standard for-of loop
for (const num of arr) {
    console.log(num); // 1, 2, 3, 4
}

// enumerated for-of loop
for (const [i, num] of arr.entries()) {
    console.log(1, num); // 0 1, 1 2, 2 3, 3 4
}
```
---
## _Optional Chaining_
- An efficient way of getting data from an object only if it exists
- Use the ?. syntax
- Returns undefined if the value does not pass
```js
const obj = {
    daysOpen = {
        Monday: {
            open = true,
            hours = '5',
        },
        Friday: {
            open = true,
            hours = '8',
        },
    },
};
daysCheck = ['Monday', 'Wednesday', 'Friday'];

for (const day of daysCheck) {
    // prints 5, Not open on that day, 8
    console.log(obj.daysOpen[day]?.hours ?? 'Not open on that day');
}
// will only print the hours if that particular day exists in the object
```
---