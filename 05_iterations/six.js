// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values  =  coding.forEach((item)=>{
//     console.log(item);
// })
  
// console.log(values);
const myNums=[1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter((num) => num > 4)

let newNums = myNums.filter((num) =>{
    return num > 4
})

console.log(newNums);

const newNums1 = []
myNums.forEach( (num) => {
    if(num > 4)
    {
        newNums1.push(num)
    }
} )
        
console.log(newNums1);
