const myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in myObject) {
    //    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}
    


//for objects use for in loop 
// for arrays we can use for of loop

