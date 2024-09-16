                // *************** 4 Pillars of DOM ***************


                        // 1. Selection of an Element

var a = document.querySelector("h1");
console.log(a);



                            // 2. Changing HTML

// document.querySelector("h1").innerHTML = "hui"
var a = document.querySelector("h1");
a.innerHTML = "Changed HTML"



                            // 3. Changing CSS

var a = document.querySelector("h1");
a.style.color = "blue";
// In JS we have to put properties in camel case unlike css
a.style.backgroundColor = "black";



                            // 4. Event Listener

var a = document.querySelector("h1");

a.addEventListener("click", function(){
    console.log("hey");
    a.innerHTML = "Badal gaya hu mai";
    a.style.color = "yellow";
    a.style.backgroundColor = "aqua";
});



// ******** Example of Bulb clicking on the same button ********

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click", function(){
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow";
        console.log("clicked");
        flag = 1;
    } else {
        bulb.style.backgroundColor = "transparent";
        console.log("Again clicked");
        flag = 0;
    }
});



// ******* Selecting Multiple Events at a same time ********

var h = document.querySelectorAll("h2");
console.log(h);

h.forEach(function(e){
    console.log(e);
});



// ******** Getting from ID *********

document.getElementById("box");



// ******** Getting from Class **********

document.getElementsByClassName("baxa");



// ******** Difference b/w textContent && innerHTML

var room = document.querySelector("#room");
// room.innerHTML = "<h2>Yo</h2>";
room.textContent = "<h2>Yo</h2>";