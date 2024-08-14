Synchronous JS
----------------------------------------------------------------------------------------------------------------------------------------------------
Basics
----------------------------------------------------------------------------------------------------------------------------------------------------

Javascript Versions --> es5 (only var) and es6 (let and const)

word vs keyword --> jiska kuch mtlb ho js mein (keyword) otherwise (word)

var and const --> variable changes, constants don't

hoisting --> variable and functions are hoisted which means there declaration is moved on the top of code

     agar var ya function declare ho gaya toh woh print bhi ho jayega
     var ko bina value diye hi print kara sakte hai error nahi dega but undefined dega
     kyunki declare hone ke baad var, function apne aap ko hoist means declared value top par lekar jaate hai jisse ki value undefined ya defined hoti hai error nahi deta

types in js -->

            1) primitives = jiska copy karne par real copy ho jaye   -->   number, string, null, undefined, boolean
            2) reference = aisi koi bhi value jisko copy karne par real copy nhi hota, blki us main value ka reference pass ho jata hai     -->     [] () {}

conditionals --> if else else-if

loops --> for while

functions --> kuch code ko likh kar koi naam de skte h
            - mainly teen kaam ke liye hote hai

            1) jab aapka code aap turant nhi chalana chahte future mein chalana chahte ho
            2) jab aapka code reuse karna chahte ho
            3) jab aap code chalana chahte ho har baar with different data

arguments --> real value jo hum dete hai function chalate waqt

parameter --> variables jinme value store hoti hai arguments waali

arrays --> array humko freedom deta hai ek se zyaada values use karne ki in a single var denoted by []

     push --> to add an element in last
     pop --> to remove an element from last
     unshift --> to to add an element in first index
     shift --> to remove an element from first index
     splice --> to remove something from middle for that we give index value and how much do we have to remove from that array like (2, 3)

objects --> object hai ek bande ki details ko hold karna, in a key value pair

            1) blank obj --> var a = {};

            2) filled obj --> var ghadi = {brand: "Kenneth Cole", price: "16K", color:"silver", type: "automatic", digital: false, kuchhbolo: function(){}}

            to access these;
            ghadi.type, ghadi.color, etc.

            in the above section; brand, price, color, etc. are all property

            methods are those property in which we give a function like, kuchhbolo

            updating object properties:
            ghadi.brand = "Titan Kenneth Cole"
            Now, brand value will change

----------------------------------------------------------------------------------------------------------------------------------------------------
Advanced
----------------------------------------------------------------------------------------------------------------------------------------------------

Difference b/w var, let & const

          // var old js mein tha
          // var function scoped hota hai => var apne parent function mein kahi bhi use ho sakta hai
          // var adds itself to the window object

          // let, const new js mein hai
          // let, const braces scoped hota hai
          // let, const doesn't adds to the window object

Window Object --> js mein kai saare features hai par kuch features jo hum use karte hai wo features wo nahi hai par fir bhi use kar paate hai kyonki wo features js language use kar leti hai window se, aur window hai ek box of features given by browser to use with js.

Browser context API --> It gives features to js like Window, Stack and Heap Memory.

Stack --> It is the sequential way of representing the data

Heap Memory --> Jitne bhi variables ya data hum banate hai unhe store kahi toh karna padta hai uske liye use hota hai Heap Memory.

execution context --> Jab bhi hum function chalayenge function khud ka imaginary container bana lega, Basically it is a container where the function's code is executed and it's created whenever a function is called, it contains 3 things:

               1) variables
               2) functions inside that parent function
               3) lexical environment of that function

    ye jo container hai imaginery ise hi hum execution context kehte hai

lexical environment --> Ye ek chart ki tarah hota hai jisme ye likha hota hai ke aapka particular function kin cheejo ko access kar sakta hai and kinko nahi, Matlab ki it holds it's scope and scope chain.

How to Copy Reference Value ?

     var a = [1, 2, 3, 4, 5];
     var b = [...a];

     var obj = {name: "Sarvesh"};
     var copyobj = {...obj};

Truthy vs Falsy --> JS mein kuch bhi likho wo mainly do prakaar se kisi ek prakaar ko belong karti hai

               falsy values = 0, false, undefined, null, NaN, document.all
               truthy values = all of the values which are not falsy are truthy

forEach --> This loop only works on Array

     ye kabhi bhi by default humare array mein change nhi karta woh humko changes krke deta hai array ki temporary copy par jiske wajah se array humesha same rehta hai

     like this:

     var a = [1, 2, 3, 4, 5];
     a.forEach(function(val){
          val + 2;
     })

     But it won't change the array a value

forin --> objects par loop karne ke liye hota hai

     var obj = {
          name: "sarvesh",
          age: 19,
          city: "jaunpur"
     }

     for(var key in obj){
          console.log(key);
          console.log(obj[key]);
          console.log(key, obj[key]);
     }

do-while --> it will give atleast one time result even the condition is wrong

callback functions --> jab bhi koi aisa code jo baad me chalta hai hum likhenge, kyunki woh code baad mein chalta hai JS ko ye pata nahi hota ki wo complete hua ya nahi, aise code ke completion par JS ko bataya jaata hai ki woh complete hogya aur hum use chala sakte hai, ye bataane ka kaam callback ka hai

     aisa code jo baad me chalta hai use hum ek function de dete hai ki bhaiya jab complete ho jaana to ye function chala dena, aur woh function jo hum dete hai woh ek normal function hi hota hai known as Callback Function (It is a part of Asynchronous JS)

First Class Functions --> JS mein ek concept hai jiska matlab hota hai ki hum function ko use kar sakte hai as a value

     var a = function(){};

     function abcd(a){
          a();
     }

     abcd(function(){console.log("hey");})

How Arrays Work From Behind ?

     In JS arrays are actually Objects

     typeof [] = 'object'

     var arr = [221, 542, 3, 2354];

     arr = {
          0: 221,
          1: 542,
          2: 3,
          3: 2354
     }

     We can also do negative Indexing ::

     var arr = [2, 3, 4, 5, 5];

     arr[-1] = 2;
     Ans will be :: [2, 3, 4, 5, 5, -1: 2]

     To find Array::
          Array.isArray([])

How to Delete Object Prop ?

     var a = {
          name: "sarvesh",
          age: 19
     }

     delete a.age;
     delete a.name;