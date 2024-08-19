// forin



const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
}
for (const key in myObject) {
    // console.log(myObject[key]);
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "ruby", "python", "java", "cpp"]


for (const key in programming) {
    // console.log(key);
}
for (const key in programming) {
    // console.log(programming[key]);
}


// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "UNITED STATES OF AMERICA")
// map.set('FR', "FRANCE")
// map.set('IN', "INDIA")

// for (const key in map) {
//     console.log(key);
// }