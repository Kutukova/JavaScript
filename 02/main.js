let userName = 'string value';

// Number
let userAge = 10;
let productPrice = 1.5;
let saleValue = 0.345;
// NaN
// 'String'/2 -> Nan
// Infinity, -Infinity;
// 1/0 ->Infinity;

// Boolean
let isAdmin = true;
let isLoginUser = false;
// Null
let noValue = null;
//Undefined 
let noFindValue = undefined;

console.log('Hello from js');
console.log(userName);
console.log(productPrice);
console.log(isAdmin);

console.log('Is user admin:', isAdmin)
// let result = userName+' '+userName;
let result = `Hello template literal ${userName} has saleValue ${saleValue} more info about user ${isLoginUser} math operation 2+2=${2+2}`;
console.log('Result', result);