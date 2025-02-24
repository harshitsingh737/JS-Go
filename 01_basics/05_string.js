const name="Harshit"
const repoCount=50

// console.log(name + repoCount+ "value");

console.log(`Hello my name is ${name} and my repo count us ${repoCount}`);

const gameName =new String("gta5")
console.log(gameName);

console.log(typeof name);
console.log(name[0]);
console.log(gameName[0]);
console.log(typeof gameName);



// Methods of string..
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf('g'));

const newString = name.substring(0,4);
console.log(newString);

const anotherString = name.slice(-8,4);
console.log(anotherString);

const myName = "     Harshit     ";
console.log(myName);
console.log(myName.trim());

const url = "https://harshit.com/hitesh%20Singh";
console.log(url.replace('%20','-'));

console.log(myName.includes('Singh'));
console.log(myName.includes('Harshit'));

 









