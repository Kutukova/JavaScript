// Визначення типу геометричної фігури за допомогою switch:
// Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор, виводить повідомлення про кількість сторін цієї фігури (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").

let figure = prompt('Enter a name of geometric figure: "circle", "square" or "triangle"');
switch (figure) {
  case 'circle':
    console.log('circle has no angles');
    break;
    case 'square':
      console.log('square has 4 angles');
      break;
      case 'triangle':
        console.log('triangle has 3 angles');
        break;
  default:
    console.log('The figure is wrong');
    break;
};

// Підрахунок суми парних чисел:
// Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).

let counter = 0;
let result = 0;
while(counter<21){
  counter++;
  if(counter % 2 == 0){
    result += counter;
  }
};
console.log(`Сумма парных чисел ${result}`);

// Таблиця множення:
// Використовуючи цикл for, напишіть програму, яка генерує "таблицю множення" виводимо в console.log операції  для конкретного числа (наприклад, для числа 5).

let number = 5;
let resultNumber = 0;
for(let i=0; i<10; i++){
  resultNumber = i*5;
  console.log(resultNumber);
};

// Зворотний лічильник:
// Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.

for(let i=10; i>0; i--){
  console.log(i);
};

// Визначення чи є число парним чи непарним:
// Напишіть програму, яка приймає число і використовуючи if та for, виводить повідомлення про те, чи є число парним чи непарним.

let userNumber = prompt('Напишите число от 1 до 100');
let resultNum;
if(userNumber<=100){
  for(let i=0; i<=userNumber; i++){
    resultNum = 1;
  }
  if(userNumber % 2 == 0){
    console.log(`Число парное ${resultNum}`);
  }
  else{
    console.log(`Число непарное ${resultNum}`);
  }
}
else{
  console.log('Вы ввели неверное число');
}


// Знаходження першого парного числа:
// Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число. Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.

for(let i=1; i<11; i++){
  if(i % 2 == 0){
    console.log(`Первое парное число ${i}`);
    break;
  }
}

// Виведення парних чисел:
// Створіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить тільки парні числа. Використайте оператор continue, щоб пропустити ітерації для непарних чисел.

for(let i=1; i<11; i++){
  if(i % 2 !== 0){
    continue;
  }
  console.log(`Все парные числа от 1 до 10 ${i}`);
}
