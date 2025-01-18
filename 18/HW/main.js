// Форма з вибором улюбленого кольору:
// Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
// Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

// Форма для вибору хобі з чекбоксами:
// Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).
// Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.

// Форма з вибором країни із випадаючого списку:
// Створіть випадаючий список з назвами країн.
// Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.

// Форма для оцінювання якості обслуговування:
// Створіть групу радіокнопок для оцінки від 1 до 5.
// Додайте обробник події onchange для виявлення вибору користувача, а потім виведіть відповідне повідомлення (наприклад, "Дякуємо за вашу оцінку!").


window.onload = function(){
  // Task 1
  let pageEl = document.querySelector('body');
  let changeForm = document.querySelector('#changecolor');
  let [...radioButtons] = document.querySelectorAll('input[name="color"]');
  changeForm.addEventListener('change', ()=>{
    for(element of radioButtons){
      if(element.checked){
        pageEl.style.background = element.value
      };
    };
  });
  // Task 2
  let formHobby = document.querySelector('#hobbies');
  let resultEl = document.querySelector('.result');
  let [...checkboxes] = document.querySelectorAll('input[name="Hobby"]');
  formHobby.addEventListener('change', ()=>{
    resultEl.innerHTML ="";
    checkboxes.forEach(item=>{
      if(item.checked){
        let pEl = document.createElement('p');
        pEl.innerText = item.value;
        resultEl.appendChild(pEl);
      }
  });
});
// Task 3
let selectEl = document.querySelector('#country');
  let capital = document.querySelector('.res');
  selectEl.addEventListener('change', function(){
      capital.innerText = this.value
  });
// Task 4
  let ratingForm = document.querySelector('#rating');
  let [...radioMarks] = document.querySelectorAll('input[name="rate"]');
  let resultMark = document.querySelector('.mark');
  ratingForm.addEventListener('change', ()=>{
    for(element of radioMarks){
      if(element.checked){
        resultMark.innerText = `Thank you for your mark ${element.value}`
      };
    };
  });
}

