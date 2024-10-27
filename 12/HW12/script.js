// Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

// Виберіть ці елементи за допомогою 
// getElementById
// getElementsByClassName
// getElementsByTagName
let idElement = document.getElementById('header');
console.log(idElement);
let classElement = document.getElementsByClassName('admin');
console.log(classElement);
let tagElement = document.getElementsByTagName('div');
console.log(tagElement);


// Створіть список ul з 5 елементами li всередині.

// За допомогою querySelector виберіть:
// - перший елемент списку
console.log('===');
let firstLi = document.querySelector('ul li');
console.log(firstLi);
// - останній елемент списку
let lastLi = document.querySelector('ul li:last-child');
console.log(lastLi);
// - 3 елемент списку
let thirdLi = document.querySelector('ul li:nth-child(3)');
console.log(thirdLi);


// За допомогою querySelectorAll
// - всі елементи li в списку
console.log('===');
let allLi = document.querySelectorAll('ul li');
console.log(allLi);
// - конвертуйте вибрані елменти в массив
let[...allLiArr] = document.querySelectorAll('ul li');
console.log(allLiArr);


// Створіть на сторінці елемент який вибирається ціми селекторами
let listItems = document.querySelectorAll('ul.nav > li');
let listItem = document.querySelectorAll('li:nth-child(2)');