// const tinderUser = new Object()     --> Singleton Object
const instaUser = {}

instaUser.id = "123abc"
instaUser.name = "Sam"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sarvesh",
            lastname: "Nand"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = obj1 + obj2
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "HiteshChoudhary"
}

// course.courseInstructor


const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// JSON -->         (for APIs [Application Program Interface])
// {
//     "name": "sarvesh",
//     "coursename": "JS in hindi",
//     "price": "free"
// }

