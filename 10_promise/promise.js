const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls,cryptofraphy,network
    setTimeout(function(){
        console.log('Async task is complete');
    },1000,)
})

// resolve ka sidha connection hai .then() ke sath
promiseOne.then(function(){
    console.log('Promise consumed');
})
    
        