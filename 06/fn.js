function showInfo(userNumber='Test name'){
  console.log('===');
  console.log(`Hello user ${userNumber}`);
  console.log('===');
}
// showInfo(1);
// showInfo(2);
// showInfo(3);
// showInfo();
// showInfo('Tom');

function sumTwoNumbers(a,b){
  return a+b;
}
sumTwoNumbers(2, 3);
console.log(`Result 2+3=${sumTwoNumbers(2,3)}`);
console.log(`Result 3+3=${sumTwoNumbers(3,3)}`);

// sayHi();

// function sayHi(){
//   console.log('Say Hi');
// }

// let expressionsayHi = function(){
//   console.log('Function expression say hi');
// }

// expressionsayHi();


function sayYes(value){
  console.log(`Say Hi User ${value}`);
}

let sayNo = function(value){
  console.log(`Say Goodbye ${value}`);
}

function checkAccess(userName, yesFn, noFn){
  if(userName == 'Admin'){
    yesFn(userName);
  }
  else{
    noFn(userName);
  }
}
checkAccess('Admin', sayYes, sayNo);
checkAccess('Tom', sayYes, sayNo);
checkAccess('Bob', sayYes, sayNo);



// function summ(a, b){
//   return a+b;
// }

// let summ = (firstNumber, secondNumber)=>firstNumber+secondNumber;

let summ = (firstNumber, secondNumber)=>{
  if(firstNumber>secondNumber){
    return firstNumber+secondNumber
  }
  else{
    return `firstNumber < secondNumber`
  }
}

console.log(`Test short version ${summ(4,3)}`);
