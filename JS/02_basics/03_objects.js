// singleton --> Object.create  (Constructor Method)

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sarvesh",
    "Full name": "Sarvesh Nand",
    [mySym]: "mykey1",
    age: 19,
    location: "Jaipur",
    email: "abc123@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "xyz321@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mno456@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);   
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());