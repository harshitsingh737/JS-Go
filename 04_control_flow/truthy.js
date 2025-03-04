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
    