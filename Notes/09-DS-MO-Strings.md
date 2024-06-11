# **Data Structures, Modern Operators, and Strings**

## _Destructuring Arrays_

- An efficient way to assing multiple variables to indexes in an array
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

- Needs to be wraped in parenthesis or else Syntax Error

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