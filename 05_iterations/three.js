// for of

const arr=[1,2,3,4,5]

for (const num of arr){
    console.log(num);
}
    
const greetings = "hello world!"

for (const greet of greetings) {
    console.log(`each chat is ${greet}`);
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('fr',"France")
map.set('USA',"United states of america")
map.set('IN',"India")

// console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(key,':-',value);
}
    


    
    