const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls,cryptofraphy,network
    setTimeout(function(){
        console.log('Async task is complete');
        // to connect resolve with .then ,i have to write resolve()
        resolve()
    },1000,)
})

// resolve ka sidha connection hai .then() ke sath
promiseOne.then(function(){
    console.log('Promise consumed');
})
     
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // We can pass the parameters in the resolve()
        resolve({username:"Chai",email:"chai@example.com"}) 
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh" , password:"123"})
        } else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

// Chaining of .then() . in this the value returned by first then goes to second .then()
 promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolve or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javaScript" , password:"123"})
        } else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

// Promise ek object hai so aap isko promiseFive() aise consume nhi karte ho , use promiseFive 

// Another way for .then()
// problem of async is that it does not handle error directly so we need try catch block
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}


consumePromiseFive()

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   }
//   catch(error){
//         console.log("E:",error);
//     }
// }
         
// getAllUsers()
  
fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
}).catch((error)=>console.log(error));

 
    
    
    



    
    
    
        