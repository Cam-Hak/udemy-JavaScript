# **JavaScript Theory**

## *JavaScript Overview*
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
## *JavaScript Engines*
- Call stack
    - Execution context (which lines to go to execute)
- Heap
    - Where the objects are stored
- JIT Just-In-Time compilation
### *Browser Runtime*
- JavaScript Engine
- Web API'S
    - provided to the JavaScript engine (not in the language itself)
    - Ex: console.log, DOM, fetch
- Callback queue
    - contains a queue datastructure that holds all callback functions for execution
---

