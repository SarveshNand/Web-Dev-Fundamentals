# Asynchronous JavaScript
-------------------------------------------------------------------------------------------------------------------------------
## Sync & Async?

    -> sync matlab ek ke baad dusra hoga, jab tak ek command complete na ho, dusra shuru nahi hoga
            => jo kuch bhi async waala properties use nahi hoga jo neeche hai toh hamara code sync nature ka hoga

    -> async matlab saare kaam ek saath shuru kardo, jiska answer pehle aa jaye uska jawaab de dena
            => setTimeout
            => setInterval
            => promises
            => fetch
            => axios
            => XMLHttpRequest

## Async JS kya hai?

    kai baar hamara final code dependent hota hai kisi aur ke server par, is case mein hume nahi pata hota ki answer uske server se kab waapas aayega, to hum kya nahi kar sakte is writing sync code, isse nipatne ke liye hum log async code likh dete hai taaki blocking naa ho and jab bhi answer aaye humara answer ke respect mein chalne waala code chal jaaye :)

        ex => // setTimeout(callback, timeinms)


                console.log("hi");      
                
                // this line will run


                setTimeout(function(){
                    console.log("hey");
                }, 2000)                
                
                // it will wait 2 secs or 2000 miliseconds


                console.log("hola");
                
                // it will execute immediately, it won't care for the previous setTimeout function cuz it is of async nature.

## Main Stack and Side Stack in JS.

    Basically we can imagine two stacks:

        1) Main Stack
        2) Side Stack

    -> Main stack par synchronous kaam hota hai aur side stack mein async kaam waale function ko daal diya jaata hai.

    -> Toh sabse pehle sync ko priority diya jaata hai then async waale ko jab main stack khaali hoga tab side stack waale ko main stack mein laaya jaayega aur woh bhi tab jab side stack mein async waala kaam ho gaya hoga.

    -> agar humne async mein 0 miliseconds bhi de diya toh sync waala pehle execute hoga kyunki async waala sync ke baad aata hai main stack mein jab saare sync functions execute and empty ho jaye.

    -> main stack aur side stack ko dekhne waala kaam "EVENT LOOP" karta hai.

        ex => 
            console.log("hey");
            // It will execute first

            console.log("hey2");
            // It will execute then

            setTimeout(function(){
                console.log("hey3");
            }, 0);
            // It will execute last because it is in side stack and will go for main stack after sync all functions.

            console.log("hey4");
            // It will execute before the async one because it is in main stack.

## JS is not Asynchronous.

    JS is Single-threaded (it can't calculate multiple things at a single time)

## Callbacks

    callback humesha ek function hota hai, ye sirf tab chalta hai jab async code ka completion ho jaata hai.

    // async code likhne ke liye
    -> fetch
    -> XMLHttpRequest
    -> axios
    -> promises
    -> setTimeout
    -> setinterval

    // async code ko call karne ke liye
    -> callbacks
    -> then catch
    -> async await

## Promises, then & catch

    async ke pending state mein do conditions honge:

    resolve -> agar humara request accept ho gaya
    reject -> agar humara request reject ho gaya

    agar resolve aaya tab hum variable mein then use kar sakte hai aur agar reject aaya tab hum variable mein catch use kar sakte hai.

    ex =>

    var ans = new Promise((res, rej) => {
        if(true){
            return res();
        }
        else{
            return rej;
        }
    });

    ans
    .then(function(){
        console.log("resolve hogaya tha");
    });
    .catch(function(){
        console.log("reject hogaya tha");
    });

## async await

    koi bhi esa function jisme hum async code likhenge, kyonki code hai to hum promises ka istemaal kar sakte hai, jab uska answer aayega humko then lagana padega, us then ko lagaane se bachane ke liye, hum async ka istemaal kar sakte hai.
        ex =>

        // function abcd(){
            fetch(`https://randomuser.me/api/`)
                .then(function(raw){
                    return raw.json();
                })
                .then(function(data){
                    console.log(data);
                })
        }
                
                // OR
        
        async function abcd(){
            let raw = await fetch(`https://randomuser.me/api/`);
            let ans = await raw.json();
            console.log(ans);
        }

## [ Concept Aside ]

### Concurrency -> 
    JS mein sync code and async code ek saath process ho raha ho use Concurrency kehte hai.
### Parallelism ->
    Focus zyaada karta hai different processors and unke cores par kaam ko chalane par.
### Throttling ->
    Kisi code ko control karna, it's number of executions.