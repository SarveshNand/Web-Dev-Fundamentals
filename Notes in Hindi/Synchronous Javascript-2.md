Synchronous JS
------------------------------------------------------------------------------------------------------------------------------
Higher Order Functions --> They are the functions which accept a function in a Parameter or Return a Function or Both.
| Aisa function jo accept karle ek aur function ya fir wo return karde ek aur function

    ex::
    
    function abcd(){
        return function(){}
    }
    abcd()

                    OR

    function abcd(val){

    }
    abcd(function(){})

Constructor Function --> A function which whenever invoked with "New" keyword, Returns an Object. If we use "This" keyword inside that function, It returns an object with all of the properties and methods mentioned inside that function with This Keyword, such function is called Constructor Function.

    Jab humare paas aisa koi bhi mauka ho ke humko ek jaisi properties waale bht saare elements banane hai us waqt hum constructor function use kar sakte hai

    exx::

    function saanchaOfBiscuit(){
        this.width = 12;
        this.height = 22;
        this.color = "brown";
        this.taste = "sugary";
    }

    new saanchaOfBiscuit()

                        OR

    function circularButtonBanao(color){
        this.radius = 2;
        this.color = color;
        this.icon = false;
        this.pressable = true;
    }
    var btn1 = new circularButtonBanao("red")
    var btn2 = new circularButtonBanao("green")

First Class Function --> A language is said to have First Class Functions when the Functions in that language are treated as Normal Values or Like Variables, We can save them, We can pass them as Arguments to another Functions.

    ex::

    setTimeout(function(){})

New Keyword --> Jab bhi new lagta hai humesha ek blank object apne mann mein bana lo aur koi bhi agar function ho usme ke this(constructor object) ki jagah ye blank object lelo

    ex::

    function abcd(){
        this.age = 12;
    }

    new abcd()
    {
        age: 12;
    }

iife (immediately invoked function expression) --> iife hai function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye

    ex::

    var ans = (function(){
        var privateVal = 12;

        return {
            getter: function(){
                console.log(privateVal);
            },
            setter: function(val){
                privateVal = val;
            }
        }
    })()

Prototype --> It is basically the collection of built-in helper functions and helper methods which is available to be used by us

Prototype Inheritance --> It is basically passing parent's features or properties to their childerns, to do the same thing in javascript with the help of prototype (one extra property always given by javascript to every object) is called prototypal inheritance.

    ex::

    var Human = {
        canFly: false,
        canTalk: true,
        canWalk: true,
        haveEmotions: true,
        willDie: true
    }

    var Student = {
        solveJsQuestion: true,
        createModernWebsite: true
    }

    Student.__proto__ = Human;

this --> jab bhi koi chij {} in brackets ke andar nahi hoti toh hum use global scope kehte hai

    this is a special keyword in Window
    
    console.log(this)   Global scope will  give  Window
    
    function abcd(){
        console.log(this);
    }
    abcd();             local scope will also give Window

Ek function jo object ke andar ho use hum method kehte hai

    ex::

    var obj = {
        baatKaro: function(){
            console.log(this);
        }
    }

    obj.baatKaro();         this method will give object

    in any method, "this" keyword will refers to parent object

call --> agar humare paas koi function hai and koi object and hume func chalana hai aur by default jo this ki value window hai use window na rakh kar point karwaana hai kisi object ki taraf

    ex::

    function abcd(val, val2, val3){
        console.log(this, val, val2, val3);
    }

    var obj = {age: 24};

    abcd.call(obj, 1, 2, 3)

apply --> jab bhi hume koi func chalana hai jisme this ki value kuch aur hai par hum chaahte hai ki this ki value kuch aur ocject rahe us waqt .call, .apply aur .bind use mein lete hai

    ex::

    function abcd(val, val2, val3){
        console.log(this, val, val2, val3);
    }

    var obj = {age: 24};

    abcd.apply(obj, [1, 2, 3])

bind -->

    ex::

    function abcd(){
        console.log(this);
    }

    var obj = {age: 24};

    var bindedFunc = abcd.bind(obj);
    bindedFunc();

Pure & Impure Functions -->

    Pure Function : 1) It should always return same output for same input
                    2) It will never change/update the value of a global variable.

    Impure Function: The Functions which doesn't follows the rules of Pure Functions are Impure Functions.