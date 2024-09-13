// Віднімання -
// Додавання +
// Множення *
// Ділення /
// Залишок від ділення %
// Піднесення до степеня **

let firstValue = 2;
let secondValue = 3;

console.log(`- operation ${firstValue-secondValue}`);
console.log(`+ operation ${firstValue+secondValue}`);
console.log(`* operation ${firstValue*secondValue}`);
console.log(`/ operation ${firstValue/secondValue}`);
console.log(`% operation 3/3 ${secondValue%3}`);
console.log(`% operation 3/1 ${secondValue%1}`);
console.log(`% operation 3/2 ${secondValue%2}`);
console.log(`% operation 30/10 ${30%4}`);

console.log(`** operation 2->2 ${2**2}`);
console.log(`** operation 2->3 ${2**3}`);
console.log(`** operation 8->2 ${8**2}`);

// Корінь
console.log(`** operation 4->1/2 ${4**(1/2)}`);
console.log(`** operation 4->1/3 ${4**(1/3)}`);
console.log(`** operation 4->1/2 ${4**0.5}`);

console.log(`Operation priority ${(1+2+3)/3}`);
console.log(`Operation priority ${(2*3)+(4*5)}`);

let firstNumber = 2;
let secondeNumber = 4;
let result = firstNumber + secondeNumber;
console.log(`Operation result ${result}`);