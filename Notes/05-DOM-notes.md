# **DOM Manipulation**

## *Query Selectors*
- returns the direct HTML element that was selected
- use the .textContent method to acquire the text from the element
- use the .value method to aquire text from an input element
- requires the same css selector to be passed
```js
const classElement = document.querySelector('.message').textContent;
const idElement = document.querySelector('#input').value;
```
---
## *Event Listeners*
- allows you to manipulate the dom based on user interaction
- takes an action and an event handler function as a parameter
    - click listener
```js
document.querySelector('.message').addEventListener('click', function () {
    // add action
});
```
---
## *Manipulating Styles*
- you can select certain elements using querySelector and alter its style attribute
    - style attribute has to be in a string
```js
// changes the background of the webpage to green
document.querySelector('body').style.backgroundColor = '#60b347';
```