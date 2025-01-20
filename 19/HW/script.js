// 1. Знаходження всіх великих літер в тексті і збереження їх в масив
// let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus 
// cupiditate!";

// 2. Вибір числових значень зі строки
// let operation = "5 плюс 7 = 3";

// 3. Знаходження слів із певною кількістю символів:
// Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання

window.onload = function(){
// Task 1
let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let bigEl = textStr.match(/[A-Z]/g);
console.log(bigEl);

// Task 2
let operation = "5 плюс 7 = 3";
let numbersEl = operation.match(/\d/g);
console.log(numbersEl);

// Task 3
let newEl = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let wordEl = newEl.match(/[a-zA-z]{5}/gi);
console.log(wordEl);
}