// here new keyword is the constructor function
// 


// constructor function hamesha new instance deta hai 

function User(username,loginCount,isLoggedIn)
{
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
        
    return this
}


// whwnever we use new keyword , an empty object is created that is called instance
const user1= new User("Harshit",12,true)
const user2 = new User("ChaiaurCode",22,false)
console.log(user1);
