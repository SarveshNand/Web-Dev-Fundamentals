// let myName = "sarvesh     "
// let mywork = "code     "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sarvesh = function(){
    console.log(`sarvesh is present in all objects`);
}

Array.prototype.heySarvesh = function(){
    console.log(`Sarvesh says hello`);
}

// heroPower.sarvesh()
// myHeros.sarvesh()
// myHeros.heySarvesh()
// heroPower.heySarvesh()


// inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()
"sarvesh".truelength()
"iceTea".truelength()