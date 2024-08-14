const accountId = 14456         // fixed and won't change will give error
let accountEmail = "abc123@gmail.com"       // we generally do this
var accountPassword = "12345"
accountCity = "Jaipur"      // we can do this but this is not a good practice
let accountState;           // we didn't put any value so it will show 'undefined'

// accountId = 2        // won't be able to replace gives error instead

accountEmail = "hbdshb@dsv.com"
accountPassword = "212232334"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);