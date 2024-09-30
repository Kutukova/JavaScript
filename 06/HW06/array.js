// 1. Калькулятор: Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї математичної операції з 2 цифровими значеннями

console.log('===');

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let operation = prompt('Введите тип операции (+ - / *');

function sum(a, b){
  return a+b;
};
function substraction(a, b){
  return a-b;
};
function multiply(a, b){
  return a*b;
};
function dividing(a, b){
  if (b==0){
    return 'Делить на 0 нельзя'
  }
  else {return a/b;
}
};
switch (operation){
  case '+':
    console.log(`${a}+${b}=${sum(a, b)}`)
    break;
  case '-':
    console.log(`${a}-${b}=${substraction(a, b)}`)
    break;
  case '*':
    console.log(`${a}*${b}=${multiply(a, b)}`)
    break;
  case '/':
    console.log(`${a}/${b}=${dividing(a, b)}`)
    break;
  default:
    console.log('Неверно введены данные')
    break;
};


// 2. Параметри та колбеки: Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

console.log('===');

let arrUsers = ['Bob', 'Jack', 'Pit'];
function wellcomeUser (arr, fnCall){
  for (let i=0; i<arr.length; i++){
    fnCall(arr[i]);
  }
}
function hiUser (user){
  console.log(`Hi user ${user}`)
}
wellcomeUser(arrUsers, hiUser);


// 3. Стрілкові функції: Перепишіть попередню функцію в стрілкову

// console.log('===');

// let arrUsers = ['Bob', 'Jack', 'Pit'];
// let hiUser = (user)=> console.log(`Hi ${user}`);
// let wellcomeUser = (arr, fnCall)=>{for(let i=0; i<arr.length; i++){
//   fnCall(arr[i])
// }
// }
// wellcomeUser(arrUsers, hiUser);

// 4. Параметри за замовчуванням: Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

console.log('===');

function helloAdmin (value= 'Tom'){
  console.log(`Hello ${value}`);
}
helloAdmin();


// 5. Задача з колбеком: Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення

console.log('===');

let string = 'Good morning';
function stringFunction(stringF){
  console.log(`${string}`);
};
function name(value, callF){
  callF(value);
}
name(string, stringFunction);


// 6. Перепишіть стрілкову функцію в звичайну: const multiplyValues = (a, b, c) => a * b * c;

console.log('===');

function multiplyValues (a, b, c){
  return a*b*c;
};
console.log(`Result a*b*c ${multiplyValues(3,5,8)}`);

