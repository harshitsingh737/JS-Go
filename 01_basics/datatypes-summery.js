// On the basis of how data are stored and access , they are divided into 2 categories
// 1. Primitive  
// Primitive types are call by value

// 7 types : String , Number , Boolean , null, undefined, Symbol, BigInt
const isLoggedIn=false;
const value=3
const str ="abc";

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);

const bigNumber = 4567891234689456n






// 2. Non Primitive (Reference)
// Array , object , Function 

const heros = ["shaktiman","naagraj"];

let myObj={
    name:"harshit",
    age:23,
}

const myFunction = function(){
    console.log("Hello World");
    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// their are two types of memory space
// 1. Stack (primitive)
let myYoutubename="hiteshchoudharydotcom"
let anothername=myYoutubename

anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let user1={
    email:"user@google.com",
    upi:"user@byl"
}

let userTwo=user1; 

userTwo.email="hitesh@google.com"

console.log(user1.email);
console.log(userTwo.email);
