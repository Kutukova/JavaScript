// Завдання 'onMouseOver' і 'onMouseOut': 
// Створіть область на сторінці (наприклад, div), яка змінює свій фоновий колір, коли користувач наводить на неї курсор миші, та повертає початковий колір, коли курсор покидає цю 
// область.


// Завдання 'onContextMenu': 
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", 
// "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".


// Завдання 'onMouseOver' і 'onMouseOut': 
// Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується. Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або 
// стилю.


// Завдання 'keyup': 
// Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена


window.onload = function(){
  // Task 1
let blockEl = document.querySelector('.block');
blockEl.addEventListener ('mouseover', function(e){
  this.style.background = 'pink';
})
blockEl.addEventListener ('mouseout', function(e){
  this.style.background = '';
})
// Task 2
let text = document.querySelector('.textBox');
let list = document.querySelector('.list');
let body = document.querySelector('body');
text.addEventListener ('contextmenu', function(e){
  e.preventDefault();
  list.style.display = 'block';
  list.style.left = e.clientX + 'px';
  list.style.top = e.clientY + 'px';
});
body.addEventListener ('click', function(){
  list.style.display = 'none';
});
// Task 3
let imgEl = document.querySelector('.hover');
imgEl.addEventListener('mouseover', function(e){
  this.style.transform = 'scale(1.5)';
  this.style.transition = 'transform 0.5 ease';
});
imgEl.addEventListener('mouseout', function(e){
  this.style.transform = 'scale(1)';
  this.style.transition = 'none';
});
// Task 4
let fieldEl = document.querySelector('.field');
let objectEl = document.querySelector('.object');
let positionX = 0;
let positionY = 0;
document.addEventListener('keydown', function(e){
  e.preventDefault();
  switch (e.key){
    case 'ArrowUp':
      positionY = Math.max(0, positionY - 5);
      break;
    case 'ArrowDown':
      positionY = Math.min(fieldEl.clientHeight - objectEl.clientHeight, positionY + 5);
      break;
    case 'ArrowLeft':
      positionX = Math.max(0, positionX - 5);
      break;
    case 'ArrowRight':
      positionX = Math.min(fieldEl.clientWidth - objectEl.clientWidth, positionX + 5);
      break;
  }
  objectEl.style.top = positionY + 'px';
objectEl.style.left = positionX + 'px';
})
}

