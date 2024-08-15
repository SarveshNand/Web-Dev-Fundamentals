// Prefix Increment/Decrement

let a = 5;
console.log(++a); // Output: 6
// Explanation: The value of `a` is incremented before it is logged.

let b = 10;
console.log(--b); // Output: 9
// Explanation: The value of `b` is decremented before it is logged.



// Postfix Increment/Decrement

let x = 7;
console.log(x++); // Output: 7
console.log(x);   // Output: 8
// Explanation: The value of `x` is logged before it is incremented.

let y = 3;
console.log(y--); // Output: 3
console.log(y);   // Output: 2
// Explanation: The value of `y` is logged before it is decremented.



let n = 5;
let result = n++ + 10;
console.log(result); // Output: 15
console.log(n);      // Output: 6