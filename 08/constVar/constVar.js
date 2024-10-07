// let myVar = 'Test';
// console.log(oldWay); // underfined
// var oldWay = 'my value';
let oldWay = 'my value';


let x = 5;
if(true){
    let x = 55;
}
for(let i = 0; i<3; i++){
    // console.log(i);
}
// console.log(`Value from loop ${i}`);
console.log(x);

// const

const PI = 3.14;
// PI ='3.1';

const userObj = {
    user:'Name',
    userPhone:'12345'
}
userObj.userEmail = 'test@gmail.com';
delete userObj.userPhone;
console.log(userObj);
// userObj = 111;

const myArr = [1,2,3];
myArr.push(4);
myArr.pop();
myArr[0] = 11;
console.log(myArr);

// myArr = [4,3,2];
// myArr = 'String';