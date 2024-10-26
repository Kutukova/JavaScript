// Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt, а результат гри виводити використовуючи alert

let variant = prompt('Enter: stone, scissors or paper');
let LowerCase = variant.toLowerCase();
let arrVariant = ['stone', 'scissors', 'paper'];
let valueVariant = Math.floor(Math.random()*3);
function randomVariant (){
  if (valueVariant === 0){
    valueVariant=arrVariant[0]
  }
  else if (valueVariant === 1){
    valueVariant=arrVariant[1]
  }
  if (valueVariant === 2){
    valueVariant=arrVariant[2]
  }
};
randomVariant();
function result (){
  if (LowerCase == valueVariant){
    alert ('A draw')
  }
  else if(LowerCase === "scissors" && valueVariant === 'paper' || LowerCase === 'stone' && valueVariant === 'scissors' || LowerCase === 'paper' && valueVariant === 'stone'){
    alert ('You win')
  }
  else if(LowerCase === 'paper' && valueVariant === 'scissors' || LowerCase === 'scissors' && valueVariant === 'stone' ||  LowerCase === 'stone' && valueVariant === 'paper'){
    alert ('You lose')
  }
  else ('You enter a wrong word')
}
result();
console.log(`You: ${LowerCase}`);
console.log(`Computer: ${valueVariant}`);

// Завдання для Math.min та Math.max:
// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.

console.log('===');
let minNumber = (a, b) => console.log(`The smallest number is ${Math.min(a,b)}`);
minNumber(3, 5);
let maxNumber = (a, b) => console.log(`The biggest number is ${Math.max(a,b)}`);
maxNumber(100, 21);

// Завдання для Math.pow:
// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.

console.log('===');
let numberPow = (a, b) => console.log(Math.pow(a, b));
numberPow(5,3);


// Завдання для Math.floor та Math.ceil:
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

console.log('===');
let mathFloor = (a) => console.log(Math.floor(a*5));
mathFloor(Math.random());
let mathCeil = (a) => console.log(Math.ceil(a*5));
mathCeil(Math.random());


// Завдання для Date.getYear:
// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.

console.log('===');
let userAge = Number(prompt('Enter your age'));
let nowDate = new Date();
let userYear = () => console.log(nowDate.getFullYear()-userAge);
userYear();


// Завдання для Date.toLocaleString:
// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.

console.log('===');
let nowDay = new Date;
console.log(nowDay.toLocaleString());


// Завдання для String.split та toUpperCase:
// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

console.log('===');
let names = 'Kate Tailor Diana Paulina';
let toUpperCase = names.toUpperCase();
let namesArr = toUpperCase.split(' ');
console.log(namesArr);

