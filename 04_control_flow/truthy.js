const userEmail="h@hitest.ai";

if (userEmail) {
    console.log("got user email");
}

else
{
console.log("Don't have user email");
}


// falsy values
// 1. false  
// 2. 0(zero) or -0
// 3. BigInt 0n
// 4. ""
// 5.null
// 6.undefined
// 7.NaN


// truthy values
// 1."0"
// 2. "false"  (anything written inside string is truthy)
// 3. " " (space in a string in also truthy)
// 4. []
// 5. {}
// 6. function(){ }  empty function 

const emptyObj={}

if(Object.keys(emptyObj).length ===0)
{
    console.log("object is empty");
}
    
// Nullish coalescing operator(??) : null undefined
let val1;
val1 = 5 ?? 10
let val2 = null ?? 10
let val3 =undefined ?? 15
let val4 = null ?? 20 ?? 15

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
;
