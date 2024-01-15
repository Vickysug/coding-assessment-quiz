

1. What is JavaScript primarily used for?

A) Video Editing
B) Building Interactive Web Pages
C) Database Management
D) Graphic Design

2. How do you declare a constant variable in JavaScript?

A) let
B) const
C) var
D) const and let

3. What is the purpose of the console.log function?

A) Connect to a Database
B) Print messages to the console
C) Create a new webpage
D) Define a new function

4. Which keyword is used to declare a variable with a block scope?

A) var
B) let
C) const
D) Both let and const
5. How do you write a single-line comment in JavaScript?

A) /* Comment */
B) # Comment
C) // Comment
D) <!-- Comment -->

6. What is the correct way to create an array in JavaScript?

A) array = [1, 2, 3]
B) let array = {1, 2, 3}
C) let array = [1, 2, 3]
D) array(1, 2, 3)

7. How do you check if two variables are strictly equal in value and type?

A) ==
B) ===
C) =
D) !==

8. What does the for loop in JavaScript do?

A) Executes a block of code repeatedly
B) Declares a variable
C) Adds two numbers
D) Defines a function

9. What is the purpose of a JavaScript function?

A) Print messages to the console
B) Create a new webpage
C) Reuse a block of code for a specific task
D) Connect to a database

10. Which of the following is used to print a message to the console?
- A) print()
- B) log()
- C) display()
- D) console.log()

Answers:

B) Building Interactive Web Pages
B) const
B) Print messages to the console
B) let
C) // Comment
C) let array = [1, 2, 3]
B) ===
A) Executes a block of code repeatedly
C) Reuse a block of code for a specific task
D) console.log()


































1. Fundamentals:
What is JavaScript?

JavaScript: JavaScript is a high-level, interpreted programming language primarily used for web development.


Explain the difference between var, let, and const.

var, let, and const: var is function-scoped, let is block-scoped, and const is block-scoped and cannot be reassigned.

What is hoisting in JavaScript?

Hoisting: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.

2. Data Types:
What are the primitive data types in JavaScript?

Primitive Data Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt.

Explain the difference between null and undefined.

null vs undefined: null is an assignment value representing no value, while undefined is a variable that has been declared but not assigned.

How do you check the type of a variable?

Checking Variable Type: Use the typeof operator.

3. Functions:
What is a closure in JavaScript?

Closures: A closure is the combination of a function and the lexical environment within which that function was declared.

Explain the difference between function declarations and function expressions.

Function Declarations vs. Function Expressions: Function declarations are hoisted, while function expressions are not.

How does call and apply work?

call and apply: Both methods are used to invoke a function with a specific this value, where call takes arguments individually, and apply takes arguments as an array.

4. Scope and Closures:
What is the scope in JavaScript?

Scope in JavaScript: Scope refers to the context in which variables are declared and the accessibility of those variables.

Explain lexical scoping.

Lexical Scoping: Lexical scoping means that the scope of a variable is defined by its position in the source code.
Closures: Closures allow a fun

How do closures work?

Closures: Closures allow a function to access variables from its outer (enclosing) scope even after the outer function has finished execution.

5. Arrays:
Explain the difference between array.push() and array.pop().

push() adds elements to the end of an array, while pop() removes the last element.

How do you iterate over an array in JavaScript?

Iterating Over an Array: Use methods like forEach, map, filter, or a for loop.

6. Objects:
What is prototypal inheritance?

Prototypal Inheritance: Objects can inherit properties and methods from other objects through their prototype chain.

How do you create an object in JavaScript?

Creating an Object: Objects can be created using object literals or the Object constructor.

Explain the difference between == and ===.

== vs ===: == performs type coercion, while === checks both value and type.

7. Async JavaScript:
What is the event loop in JavaScript?

Event Loop: The event loop is a mechanism that allows JavaScript to perform non-blocking operations.

Explain callbacks and how to avoid callback hell.

Callbacks: Callbacks are functions passed as arguments to another function and are executed later.

What is a Promise? How is it different from callbacks?

Promises: Promises represent a value that may be available now, in the future, or never.

8. ES6+ Features:
Explain arrow functions and their benefits.

Arrow Functions: Shorter syntax for writing functions.

What is destructuring assignment?

Destructuring Assignment: Extracting values from arrays or properties from objects into variables.

How does the let, const, and class keywords differ from their counterparts in ES5?

let, const, and class: Introduced in ES6 for block-scoping and class-based object-oriented programming.

9. DOM Manipulation:
How do you select elements in the DOM?

Selecting Elements: Use methods like getElementById, getElementsByClassName, querySelector, etc.

Explain event delegation.

Event Delegation: Attaching a single event listener to a common ancestor rather than to each individual element.

What is the difference between innerHTML and textContent?

innerHTML vs textContent: innerHTML sets or gets the HTML content, while textContent sets or gets the text content.

10. Testing:
What is the purpose of a testing library like Jest?

Purpose of Jest: Jest is a JavaScript testing framework that focuses on simplicity and efficiency for unit testing.

Explain unit testing and integration testing.

Unit Testing and Integration Testing: Unit testing tests individual units or functions, while integration testing checks if different parts of the system work together.

11. Security:
What is Cross-Site Scripting (XSS) and how can it be prevented?

Cross-Site Scripting (XSS): XSS is a security vulnerability where an attacker injects malicious scripts into web pages.

How do you secure your JavaScript code?

Securing JavaScript Code: Use proper input validation, avoid using eval, and sanitize user input.

12. Performance Optimization:
What are some techniques for improving the performance of a web application?

Performance Improvement Techniques: Minification, compression, lazy loading, reducing HTTP requests, using a Content Delivery Network (CDN).

Explain lazy loading and its benefits.

Lazy Loading: Loading resources only when they are needed.

13. APIs and AJAX:
What is AJAX?

AJAX: Asynchronous JavaScript and XML. It allows for updating parts of a web page without reloading the entire page.

How do you make an HTTP request in JavaScript?

Making HTTP Requests: Use methods like fetch or libraries like Axios.

14. Promises and Async/Await:
Explain the purpose of async and await.

async is used to define asynchronous functions, and await is used to pause execution until a promise is resolved or rejected.

How does error handling work in promises and async/await?

Error Handling: Use try-catch blocks with async/await or .catch with promises.

15. Frameworks and Libraries:
Explain the differences between Angular, React, and Vue.js.

Angular, React, Vue.js: These are popular JavaScript frameworks/libraries for building user interfaces.
Angular:
Developed and maintained by Google.
Written in TypeScript, a superset of JavaScript.
React:
Developed and maintained by Facebook.
Initially developed using JavaScript, but can also be used with TypeScript.
Vue.js:

Developed by Evan You and maintained by the community.
Primarily written in JavaScript but supports TypeScript as well.

What is the Virtual DOM in React?

Virtual DOM in React: React uses a virtual DOM to improve performance by minimizing the number of direct manipulations to the actual DOM.