// Nested function

function one()
{
    const username = "Harshit"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //  console.log(website);
     two()
        
}
// one()

if(true)
{
    const username = "harshit"
    if(username==="harshit")
    {
        const website = " youtube"
        console.log(username+website);
    }
    //  console.log(website); //error
    
}

// console.log(username); //error   


        // ++++++++++++++++++++++++++++++++++intresting++++++++++++++++++++
        
console.log(addone(5));  // if i call a function before it it will work properly
function addone(num){
    return num+1
}



console.log(addtwo(3)); // But in this case I have store the function in variable so i cannot call it before.
const addtwo = function(num){
    return num+2
}


