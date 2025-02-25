// Dates

let myDate=new Date()

console.log(myDate);
console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

console.log(typeof myDate);

let newDate=new Date(2024,5,25);
console.log(newDate);
console.log(newDate.toDateString());

let newDate1= new Date(2024,8,11,5,30,45);
console.log(newDate1.toLocaleString());

let newdate2=new Date("05-14-2024");   //mm-dd-yyyy
console.log(newdate2.toLocaleString());

let myTimeStamp =Date.now();
console.log(myTimeStamp);

// date.now is a timestamp that give current milliseconds.
console.log(newdate2.getTime());
// to convert in into seconds
console.log(Math.floor(Date.now()/1000));

let newDate4=new Date();
console.log(newDate4);
console.log(newDate4.getDay());
console.log(newDate4.getMonth()+1);

console.log(`${newDate4.getDay()} and the time is ${newDate4.getTime()}`);

newDate4.toLocaleString('default',{weekday:"long"});










