# **JavaScript Theory**

## _JavaScript Overview_

1. **High-Level language**
   - Doesn't have to deal with memory allocation
1. **Garbage-Collected**
   - Automatically cleans memory
1. **Just-in-time compiled**
   - Abstracted code that gets compiled to machine code
1. **Multi-Paradigm** (imperative vs. declarative)
   - Procedural programming
   - Object-oriented programming
   - Functional programming
1. **Prototype-based object-oriented**
   - (come back to this)
1. **First-class functions**
   - Functions are treated as variables
   - You can pass them or return them from other functions
1. **Dynamically-typed language**
   - You do not need to manually assign types to variables
1. **Single-threaded & Non-blocking event loop**
   - JS is single threaded, long running tasks would need an event loop to temporarly make it run in the background and return them to the main thread when finished

---

## _JavaScript Engines_

- Call stack
  - Execution context (which lines to go to execute)
- Heap
  - Where the objects are stored
- JIT Just-In-Time compilation

### _Browser Runtime_

- JavaScript Engine
- Web API'S
  - provided to the JavaScript engine (not in the language itself)
  - Ex: console.log, DOM, fetch
- Callback queue
  - contains a queue datastructure that holds all callback functions for execution

---

## _Understanding the Call Stack_

<table> 
    <tr>
        <td>Compilation <br>⬇</td>
    </tr>
    <tr>
        <td>Creation of Global Context <span><em>(top level code)</em><span><br>⬇</td>
    </tr>
    <tr>
        <td>Execution of Top Level Code<br>⬇</td>
    </tr>
    <tr>
        <td>Execution of Functions <span><em>(& waiting for callbacks)</em></span></td>
    </tr>
</table>

<style>
table {
    text-align:center;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5rem;
}

span {
    font-size: 1.2rem;
}
</style>

## _What's Inside Execution Context?_

1. Variable Environment
   - let, const, and var declarations
   - functions
   - arguments objects
1. Scope Chain
1. _this_ keyword

## _Scope_

1. Global Scope
   - Outside any function or block
   - Top level code
1. Function Scope (local)
   - Variables declared inside the function
1. Block Scope (ES6)
   - Variables declared inside a block
   - if else statements, loops, etc.
   - only applies to let and const variables
