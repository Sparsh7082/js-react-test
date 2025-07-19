Here's your JavaScript Q\&A converted into **basic English** suitable for a **README file** (like for a GitHub test prep or revision notes):

---

# JavaScript Interview Q\&A (Basic English Version)

### Q1. What are the different data types in JavaScript?

There are two types of data types:

1. **Primitive Types** –
   Examples: `Boolean`, `BigInt`, `String`, `Number`, `Null`, `Undefined`, `Symbol`

2. **Non-Primitive Types** –
   Examples: `Object`, `Array`, `Function`

---

### Q2. What is Hoisting in JavaScript?

Hoisting means moving **variable and function declarations to the top** of their scope before code execution.

---

### Q3. What is the difference between `var`, `let`, and `const`?

* `var` – Function-scoped, can be updated, ES5 feature.
* `let` – Block-scoped, can be updated, ES6 feature.
* `const` – Block-scoped, cannot be changed once assigned, ES6 feature.

---

### Q4. What is a Closure?

A closure is when a function **remembers** variables from its outer scope, even after the outer function has finished running.

Example:

```js
function outer() {
  let name = "Sparsh";
  return function inner() {
    console.log(name);
  };
}
const call = outer();
call(); // Output: Sparsh
```

---

### Q5. What is the difference between `==` and `===`?

* `==` – Checks **value** only.
* `===` – Checks **value and type** (strict equality).

Example:

```js
let age = "67";

console.log(age == 67);  // true
console.log(age === 67); // false
```

---

### Q6. What are Truthy and Falsy values?

* **Truthy**: Values that are considered `true` in conditionals.
  Example: `1`, `"abc"`, `true`
* **Falsy**: Values that are considered `false`.
  Example: `0`, `false`, `null`, `undefined`, `""`, `NaN`

---

### Q7. What is the difference between `null` and `undefined`?

* `null`: Value is **empty** (nothing).
* `undefined`: Value is **not assigned yet**.

Examples:

```js
let a = null;
console.log(a); // null

let b;
console.log(b); // undefined
```

---

### Q8. What is Event Delegation?

Event delegation means using a **single event listener on a parent element** to handle events for its children.

---

### Q9. What is the use of `this` keyword?

`this` refers to the **current object or context** where the code is running.

---

### Q10. What is an Arrow Function? How is it different from a regular function?

Arrow functions are a **shorter way to write functions** (introduced in ES6) and they **do not have their own `this`**.

Syntax:

```js
const add = (a, b) => a + b;
```

---

### Q11. What is the difference between Synchronous and Asynchronous in JavaScript?

* **Synchronous**: Code runs **line by line** (blocking).
* **Asynchronous**: Code can **run later**, without stopping the rest of the code.
  Example: API calls, `setTimeout`, Promises

---

### Q12. What is the Event Loop?

The **event loop** helps JavaScript run asynchronous code by checking the **call stack** and **callback queue**.

---

### Q13. What are Promises?

A Promise is used for **asynchronous operations**. It has 3 states:

* `pending`
* `resolved`
* `rejected`

Example:

```js
fetch('api/data')
  .then(response => response.json())
  .catch(error => console.error(error));
```

---

### Q14. What is a Callback Function?

A callback function is a **function passed as an argument** to another function.

---

### Q15. Difference between `map`, `filter`, and `forEach`?

* `map`: Returns a **new array** after applying a function to each item.
* `filter`: Returns a **new array** with only items that match a condition.
* `forEach`: Runs a function on each item but **does not return** a new array.

---

### Q16. Difference between `setTimeout` and `setInterval`?

* `setTimeout`: Runs code **once** after a delay.
* `setInterval`: Runs code **repeatedly** at fixed time intervals.

---

### Q17. What is LocalStorage?

`localStorage` is used to **store data in the browser**. The data stays even after refreshing or closing the browser.

---

### Q18. What is `async/await`?

`async/await` is used to **handle asynchronous code** more easily.

Example:

```js
async function getData() {
  let response = await fetch('api/data');
  let data = await response.json();
  console.log(data);
}
```

---

### Q19. What is a Higher Order Function?

A **Higher Order Function** is a function that:

* Takes another function as an argument, or
* Returns a function

Example:

```js
function greet(fn) {
  fn();
}
```

---

