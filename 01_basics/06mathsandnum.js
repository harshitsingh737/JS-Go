const score=100;
const balance = new Number(400);

console.log(score);
console.log(balance); 

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966; 

// important
console.log(otherNumber.toPrecision(2));

// ***
const hundred = 1000000;

// apply comma in USA style
console.log(hundred.toLocaleString());

// apply commas in INDIAN style
console.log(hundred.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,6,8,9));
console.log(Math.max(4,6,8,9));

// to generate random number between 0 and 1
console.log(Math.random()); 

// to generate random number between 0 and 9
console.log(Math.random()*10);

// to generate random number between 1 and 9
console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);


