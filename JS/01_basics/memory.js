// Stack (Primitive), Heap (Non-Primitive)

let myName = "sarvesh"

let anothername = myName
anothername = "Itachi"

console.log(myName)
console.log(anothername)




let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);