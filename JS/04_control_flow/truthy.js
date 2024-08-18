const userEmail = "a@sarvesh.ai"
const userArr = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user Email");
}


// falsy values --> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values --> those values that are not falsy are all truthy...
// Some Special truthy cases --> "0", 'false', " ", [], {}, function(){}


if (userArr.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// val1 = undefined ?? null
val1 = null ?? undefined


console.log(val1);



// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")