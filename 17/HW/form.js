// Завдання 1: Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.
// Інструкції:
// Створіть два поля введення: одне для суми, друге для курсу обміну.
// Додайте кнопку, яка виконає конвертацію при її натисканні.
// При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
// Виведіть результат конвертації на сторінку.

// Завдання 2: Динамічний список задач
// Мета: Створити додаток для управління списком задач, де користувач може додавати та видаляти задачі.
// Інструкції:
// Створіть поле введення для введення назви задачі.
// Додайте кнопку для додавання задачі до списку.
// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.
// Додайте можливість видалення задачі зі списку.

window.onload = function(){
  // Task 1
  let formEl = document.querySelector('.convertorForm');
  let buttonEl = document.querySelector('.convertBtn');
  let summEl = document.querySelector('#summ');
  let changeEl = document.querySelector('#change');
  let resultEl = document.querySelector('.result');
  buttonEl.addEventListener('click', function(e){
    e.preventDefault();
    resultEl.innerHTML = `You will get ${summEl.value*changeEl.value} UAH`;
    if(summEl.value === '' || changeEl.value === ''){
      alert('Enter value');
    }
    formEl.reset();
  });
  // Task 2
  let listTask = document.querySelector('.listToDo');
  let button = document.querySelector('.taskBtn');
  let taskEl = document.querySelector('#task');
  let listEl = document.querySelector('.list');
  button.addEventListener('click', function(e){
    e.preventDefault();
    if(taskEl.value === ''){
      alert('Enter your task');
    }
    else{
      let newList = document.createElement('li');
      let removeBtn = document.createElement('button');
      listEl.appendChild(newList);
      newList.innerHTML = taskEl.value;
      removeBtn.innerHTML = 'Delete';
      newList.appendChild(removeBtn);
    removeBtn.addEventListener('click', function(){
      newList.remove();
    })
    listTask.reset();
    }
  })
}