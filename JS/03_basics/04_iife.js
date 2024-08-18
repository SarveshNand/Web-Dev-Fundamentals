// Immediately Invoked Function Expressions (IIFE)

// NOTE :: If we want to execute more than one IIFE then we have to provide ; to the last IIFE

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})
();



( () => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO`)
})();



( (name) => {
    // IIFE with Parameters
    console.log(`DB CONNECTED TWO ${name}`)
})('sarvesh')