// array

const myArr = [0, 1, 2, 3, 4, 5, true, "sarvesh"]
const myHeroes = ["ironman", "batman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(typeof myArr);
// console.log(myArr[7]);


// ++++++++++++++++++++++ Array Methods +++++++++++++++++++++++



// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// ++++++++++++++++++ slice, splice +++++++++++++++++++


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)      // slice will show the values (including, excluding) but not from reference but by value

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)     // splice will cut the values from the original array from it's memory
console.log("C ", myArr);
console.log(myn2);