const accountId=123
let accountEmail="harshit123@email.com"
var accountPassword="12345"
accountCity="delhi"

// accountId=78 // not possible because accountId is constant..
console.log(accountId);

console.log(accountEmail);
accountEmail="kkr.hg"
accountPassword="1212121"
accountCity="mumbai"
 let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
prefer not to use var because of issues in block scope and functional scope 
*/

