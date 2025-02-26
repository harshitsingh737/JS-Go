//  singleton

// object literals

const mySym =Symbol("key1")

const JsUser = {
    name:"Harshit",
    "full name":"Harshit Singh",
    [mySym] :"myKey1",    // to access symbol inside a object we need to use square brackets
    age:18,
    location:"Jaipur",
    email:"harshit@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["name"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym])


// to change the values in the object 
// JsUser.email="harshit@737.com"
// console.log(JsUser);
// Object.freeze(JsUser)  // freex will lock the object and further changes in the object will not work
// JsUser.email="harshithello@.com"  // this will not give any error but the changes will not effect the object because it is used after the freez point
// console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





