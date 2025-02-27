const tinderUser = new Object() // empty object // this is singelton object
const tinderUser1 ={}  // this is not a singleton object

console.log(tinderUser); 

tinderUser.id= "123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"harshit",    // objects inside object
            lastname:"singh"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4={obj1,obj2}  // this will give you the problem same as array
// console.log(obj4);

// const obj4=Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1,...obj2,...obj3}  //most of the time this is used 
console.log(obj4);

const users=[
    {
        id:1,
        email:"harshit@google.com"
    },
    {
        id:1,
        email:"harshit@google.com"
    },
    {
        id:1,
        email:"harshit@google.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // it will return the values of object as string of array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('roll_no'));






