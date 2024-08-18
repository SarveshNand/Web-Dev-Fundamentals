const user = {
    username: "sarvesh",
    price: 999,

    welcomeMessage : function (params) {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(params) {
//     let username = "sarvesh"
//     console.log(this.username);
// }
// chai()


const chai = () => {
    let username = "sarvesh"
    console.log(this.username);
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "sarvesh"})

console.log(addTwo(3, 4));


// const myArray = [2, 4, 56, 67, 3, 4]
// myArray.forEach()