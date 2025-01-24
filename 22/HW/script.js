// Завдання 1.
// Ланцюжок promise: Напишіть ланцюжок promise, де перший promise додає число до вхідного параметра, другий множить його, а третій віднімає 10 від отриманого числа. Кожна операція повинна бути виконана в окремому then. 
// Використайте catch для вловлювання помилок.

// Завдання 2.
// Перетворення тексту: Створіть функцію, яка приймає рядок і повертає promise. promise має перетворювати рядок у верхній регістр після 2 секундної затримки. Використайте setTimeout для створення затримки. Після 
// завершення, використайте then для виведення результату і catch для обробки помилок.

// Завдання 3.
// Напишіть функцію, яка приймає два числа як аргументи і повертає promise. promise має вирішуватися з повідомленням про те, яке з чисел більше, або відхилятися, якщо числа рівні, з повідомленням "Числа рівні".

window.onload = function(){
  // Task 1
  let number = 3;
  let newPromise = new Promise(resolve=>resolve(number))
  .then(value=>value+5)
  .then(value=>value*2)
  .then(value=>value-10)
  .then(value=>console.log(`Result: ${value}`)).catch((error)=>{
    console.log(`Promise error ${error}`);
  });

  // Task 2
  let stringEl = 'To Uppercase';
  let newStringEl = text=>{
    return new Promise(resolve=>{
      setTimeout(function(){
        console.log('Result:', text.toUpperCase());
        }, 3000);
        resolve();
    });
  }
  newStringEl(stringEl).then(value=>console.log(value)).catch((error)=>{console.log('Error', error)});

  // Task 3

let firstNumber = 3;
let secondNumber = 3;
let compareNumbers = (a,b)=>{
  return new Promise((resolve, reject)=>{
    if(a>b){
      resolve(`Result: ${a}>${b}`);
    }
    else if(b > a){
      resolve(`Result: ${b}>${a}`);
    }
    else{
      reject('Numbers are equal');
    }
  });
}
  compareNumbers(firstNumber, secondNumber).then(value=>
    console.log(value)).catch((error)=>{console.log('Error result', error)});
    
}



