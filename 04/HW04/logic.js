// Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let firstNumber = Number(prompt('Напишите первое число'));
let secondNumber = Number(prompt('Напишите второе число'));
let thirdNumber = Number(prompt('Напишите третье число'));

if(firstNumber>secondNumber && firstNumber>thirdNumber){
console.log(`Большее число ${firstNumber}`);
}
else if(secondNumber>firstNumber && secondNumber>thirdNumber){
  console.log(`Большее число ${secondNumber}`);
}
else{
  console.log(`Большее число ${thirdNumber}`);
}

// Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let numberMonth = Number(prompt('Напишите номер месяца от 1 до 12'));
let resultMonth = '';

if(numberMonth>0 && numberMonth<=2){
  resultMonth = 'Зимний сезон';
  console.log(resultMonth);
}
else if(numberMonth>=3 && numberMonth<=5){
  resultMonth = 'Весенний сезон';
  console.log(resultMonth);
}
else if(numberMonth>=6 && numberMonth<=8){
  resultMonth = 'Летний сезон';
  console.log(resultMonth);
}
else if(numberMonth>=9 && numberMonth<=11){
  resultMonth = 'Осенний сезон';
  console.log(resultMonth);
}
else if(numberMonth==12){
  resultMonth = 'Зимний сезон';
  console.log(resultMonth);
}
else{
  console.log('Wrong number');
}

// Визначення розміру числа:
// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let yourNumber = Number(prompt('Введите число'));

if(yourNumber>0){
  console.log(`Число положительное ${yourNumber}`);
  }
  else if(yourNumber==0){
    console.log(`Число нулевое ${yourNumber}`);
  }
  else{
    console.log(`Число отрицательное ${yourNumber}`);
  }

// Перевірка величини кута:
// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let angle = Number(prompt('Введите величину угла в градусах'));
angle<=90 ? console.log('Величина острого угла'):console.log('Величина тупого угла');


// Оцінка студента:
// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).
// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// менше 60: F
// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.
// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).

let userMark = Number(prompt('Введите свою оценку за тест от 0 до 100'));
let mark = '';

if(userMark>=90 && userMark<=100){
  mark = 'A';
  console.log(`Ваша оценка ${mark}`);
}
else if(userMark>=80 && userMark<=89){
  mark = 'B';
  console.log(`Ваша оценка ${mark}`);
}
else if(userMark>=70 && userMark<=79){
  mark = 'C';
  console.log(`Ваша оценка ${mark}`);
}
else if(userMark>=60 && userMark<=69){
  mark = 'D';
  console.log(`Ваша оценка ${mark}`);
}
else if(userMark<60){
  mark = 'F';
  console.log(`Ваша оценка ${mark}`);
}
else{
  console.log('Wrong mark');
}
console.log(userMark++);
console.log(userMark);
userMark>=60?console.log('Вы сдали экзамен'):console.log('Вы не сдали экзамен');

