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
//     // console.log(this.username); // gives you undefine because we are in function and not in object
//     console.log(this);
    
// }

// chai()


// this is arrow function
const chai = () => {
    let username= "harshit"
    console.log(this);
}

// Read the difference between normal function and arrow function

// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2

// }

// to make this function implicit we can remove the curly bracket and remove the return statement
// curly braces me wrap kara to return likhna padega warna nhi likhna padega
const addTwo = (num1,num2) => (num1+num2)


console.log(addTwo(3,4));


    