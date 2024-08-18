// NOTE :: Global Execution Context is different for browser and Our Environment (like node, dino, etc.).   On Browser we  will always see the WINDOWS but in Our Environment the case will be different (like for node we get {}).






// var c = 300
// let a = 50

// if (true) {
//     let a = 10
//     const b = 20
//     // var c = 30
//     // c = 30
//     console.log("INNER: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(params) {
    const username = "sarvesh"    

    function two(params) {
        const website = "youtube"
        console.log(website);
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "sarvesh"
    if (username === "sarvesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++++ interesting +++++++++++++++++++++


addone(5)
function addone(num) {
    return num + 1
}



addTwo(5)
const addTwo = function (num) {
    return num + 2
}
