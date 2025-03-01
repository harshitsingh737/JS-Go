const user ={
    username:"Hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// imp++++++++++++++
// console.log(this);  // browser ke andar sabse global object hai wo windows object hai 


// function chai()
// {
//     // let username="harshit"
//     // console.log(this.username); // gives you undefine because we are in function and in object
//     console.log(this);
    
// }

// chai()


// this is arrow function
const chai = () => {
    let username= "harshit"
    console.log(this);
}

chai()
    