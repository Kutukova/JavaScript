// Створіть змінні number1 та number2 і використайте оператори порівняння, щоб визначити, чи вони рівні.
// Виведіть результат за допомогою alert, щоб повідомити користувача про те, чи рівні числа.


let number1 = 3;
let number2 = 5;
let resultNumber = number1 == number2;
alert(`Result ${resultNumber}`);

// Використовуючи prompt, запросіть у користувача введення числа.
// Перевірте, чи введене число парне чи непарне.
// Виведіть результат з використанням console.log.

let z = Number(prompt(`Type first number`));
let resultZ = z % 2 ===0;
console.log(resultZ);

// Використовуючи prompt, запитайте у користувача його вік.
// Перевірте, чи вік менше 18 років.
// Виведіть відповідне повідомлення про те, чи може користувач використовувати певний ресурс.

let yourAge = Number(prompt(`How old are you?`));
if (yourAge >= 18) {
  alert('You can open the website!')
} else {
  alert('You can not open the website!')
}

// Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .
// Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).
// Виведіть результат за допомогою console.log.

let price = Number(prompt(`Enter your price`));
let amount = Number(prompt(`Enter amount`));
let resultPrice = price*amount;
console.log(`Result price ${resultPrice}`);


// Використовуючи prompt, запросіть в користувача вартість товару.
// Розрахуйте знижку на товар у розмірі 50% від введеної вартості.
// Виведіть результат знижки за допомогою alert.

let adminPrice = Number(prompt(`Enter your price`));
let discount = 50;
let resultDiscount = (adminPrice*discount)/100;
alert(`Result ${resultDiscount}`);
