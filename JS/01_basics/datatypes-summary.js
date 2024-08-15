// ----------------------------------------------- PRIMITIVE -------------------------------------------------------------

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId);


// BigInt will give n in last

const bigNumber = 438732476347683454543543543554546543454456n
console.log(typeof bigNumber);



// -------------------------------------------- REFERENCE (Non Primitive) --------------------------------------------------

// Array, Objects, Functions

const heros = ["Naruto", "Hulk", "Miyamoto Musashi"];

let myObj = {
    name: "sarvesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);