let score ="33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let score1="33abc";
console.log(score1);
console.log(typeof score1);


let change = Number(score1);

console.log(change);

let score2=true;
let change2=Number(score2);
console.log(change2);

// "33" => 33
// "33abc" => NaN
// true =>1 ; false=>0;

let isLoggedIn ="harshit";

let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// 0=> false

// "" =>false
// "hjkda"=>true

let stringNumber=33
let stringToNum=String(stringNumber)
console.log(stringToNum);
console.log(typeof stringToNum);

// *******************************operation***********************************

let value =3
let negVal=-value
console.log(negVal)

let str1="hello"
let str2=" harshit"
let str3 = str1+str2
console.log(str3)

console.log("1"+2);
console.log(1+"2");
console.log(1+3+"2");
console.log("1"+1+2);


