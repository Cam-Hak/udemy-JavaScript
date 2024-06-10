# **DOM Manipulation**

## *Query Selectors*
- returns the direct HTML element that was selected
    - querySelectAll returns an object containing all the elements that were searched
- use the .textContent method to acquire the text from the element
- use the .value method to aquire text from an input element
- requires the same css selector to be passed
```js
const classElement = document.querySelector('.message').textContent;
const idElement = document.querySelector('#input').value;
const allDivElements = document.querySelectorAll('div'); // array of div elements
```
---
## *Event Listeners*
- allows you to manipulate the dom based on user interaction
- takes an action and an event handler function as a parameter
    - click listener
    - keydown listener
        - keydown listener requires a global event listener
        - needs to initiated by the document
```js
message.addEventListener('click', function () {
    // add action
});
// requires an event parameter to be passed into the function to access the listener attributes
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") closeWindow();
})
```
### *Passing functions into event listeners*
- when passing your own function into an event listener you need pass its reference
- passing a function call as an argument would result in a call as the line was read and before the action was completed
```js
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal); // name of function but no parenthesis
overlay.addEventListener('click', closeModal);
```
---
## *Manipulating Styles*
- you can select certain elements using querySelector and alter its style attribute
    - style attribute has to be in a string
```js
// changes the background of the webpage to green
document.querySelector('body').style.backgroundColor = '#60b347';
```
---
## *Editing HTML attributes*
- .classList gives you access to the class information of that element
    - you can remove class names, add class names, and check if a class name exists
```js
const modal = document.querySelector('.modal');

if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
}

```