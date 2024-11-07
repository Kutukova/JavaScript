// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом, при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір.

// 2. ondblclick
// Задача: Створіть елемент який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

// 3. addEventListener і removeEventListener
// Створити кнопку і текстовий елемент в якому розмістіть лічільник: 0, при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки.

// 5.event.target   
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік.


window.onload = function(){
  // Task 1
  let button = document.querySelector('.btn');
  let pEl = document.querySelector('p');
  button.addEventListener('click', function(){
    pEl.style.color = 'green';
  });
  // Task 2
  let block = document.querySelector('.blck');
  block.ondblclick = function(){
    block.style.width = (block.offsetWidth*2) + 'px';
    block.style.height = (block.offsetHeight*2) + 'px';
  };
  
  // Task 3
  let counter = 0;
  let btn = document.querySelector('.counter');
  let count = document.querySelector('.counterText');
  btn.addEventListener('click', function(){
    counter++;
    count.textContent = `Counter: ${counter}`;
    if(counter >= 10){
      btn.removeEventListener('click', arguments.callee);
    }
  })

  // Task 4
  let [...divElement] = document.querySelectorAll('.items');
  divElement.forEach(item => {
    item.onclick = function(){
      this.remove();
    }
  });
  
  // Task 5
  let container = document.querySelector('.blockContainer');
  container.onclick = function(item){
    alert (`You enter the button ${item.target.innerHTML}`);
  }
}