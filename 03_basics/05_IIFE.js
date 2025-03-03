// Immediately Invoked Function Expressions(IIFE)
// An IIFE is a function that executes immediately after its definition. It helps prevent polluting the global scope.
// Keeps code modular.
// Prevents global variable pollution.
// Immediately executes logic without needing an explicit function call.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //semi colon is important after IIFE
    
// ()()  in this inside first braces function is written and the second braces is used to run or execute function...

(()=>{
    // SIMPLE IIFE
    console.log(`DB CONNECTED TWO`);
    
})();

((name)=>{
    console.log(`DB CONNECTED THREE ${name}`);
    
})("harshit");