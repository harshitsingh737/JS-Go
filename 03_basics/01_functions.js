

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

    