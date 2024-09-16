// let firstNumber = prompt(`Type first value`); 
// number->string `2`+`3` = 23 касается +
// let secondValue = promt(`Type second value`);

let firstNumber = Number(prompt(`Type first value`)); 
let secondValue = Number(promt(`Type second value`));

// console.log(`+ operation ${firstNumber+secondValue}`);
console.log(`- operation ${firstNumber-secondValue}`);
console.log(`* operation ${firstNumber*secondValue}`);
console.log(`/ operation ${firstNumber/secondValue}`);

// console.log(`+ operation ${+firstNumber+ +secondValue}`);
// console.log(`+ operation ${parseInt(firstNumber)+parseInt(secondValue)}`);
// parseInt 2.3 -> 2
// console.log(`+ operation ${parseFloat(firstNumber)+parseFloat(secondValue)}`);
console.log(`+ operation ${Number(firstNumber)+Number(secondValue)}`);