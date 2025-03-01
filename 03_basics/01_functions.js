

function sayMyName()
{
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

//sayMyName  //This is function reference
// sayMyName()  // This is function execute

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }    This is not the correct way to write a function because it is not returning any thing

// addTwoNumber(3,4)
// addTwoNumber(3,"4")
// addTwoNumber(3,null)
// addTwoNumber(3,"a")

function addTwoNumber(number1,number2)
{
    let result = number1 + number2
    return result
}

// const result = addTwoNumber(3,10)
// console.log("Result:",result);
 
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter your name");  
       return 
    }

    return `${username} just logged in`
}

console.log(loginUserMessage("harshit"))
console.log(loginUserMessage(""))
// console.log(loginUserMessage())   // if user does not pass any name argument then it will show undefined, so tackle this we have to introdeuce a if statement in a function
console.log(loginUserMessage());




// REST OPERATOR
// The rest operator (...) in JavaScript is used to collect multiple arguments into a single array. It allows functions to accept an indefinite number of arguments and bundle them into an array.
// Usage of the Rest Operator
// The rest operator is represented by three dots (...) and is primarily used in function parameters.
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2,3,5));


const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]



// Using object in function
const user = {
    username :"harshit",
    price:199
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

// handleObject({
//     username:"sam",
//     price:399
// })

// passing array in function
const myArray=[20,30,40,50]
function solve(getArray)
{
    return getArray[1]
}

console.log(solve(myArray))




 

    