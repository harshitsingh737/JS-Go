const coding =["js","ruby","java","python","cpp"]


// callback function does not have name so remove name from function
// coding.forEach( function (val){
//     console.log(val);
// } )
    
// arrow function
// coding.forEach((item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// } )
    
const myCoding = [
    {
        languageName:"javaScript",
        languageFilename:"js"
    },

    {
        languageName:"java",
        languageFilename:"java"
    },

    {
        languageName:"python",
        languageFilename:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);   
} )