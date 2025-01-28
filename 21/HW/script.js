// Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage. Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.

// Створіть просту форму з декількома налаштуваннями (наприклад, кольором фону сторінки), і збережіть вибір користувача у localStorage. При наступному відкритті сторінки, застосуйте ці налаштування.

// Реалізуйте простий список завдань (to-do list), де можна додавати і видаляти пункти. Зберігайте список у localStorage, щоб після перезавантаження сторінки завдання залишалися доступні.

// Створіть об'єкт JavaScript, який включає різні типи даних (наприклад, рядки, числа, масиви, об'єкти). Використовуйте JSON.stringify для конвертації об'єкта у формат JSON. Потім збережіть цей JSON у файл. Ви можете 
// зробити це в редакторі коду, зберігши дані у файл із розширенням .json.

window.onload = function(){
  // Task 1
  let skill = document.querySelector('#skill');
  let btnSave = document.querySelector('#save');
  let btnShow = document.querySelector('#show');
  let text = document.querySelector('p');
  btnSave.addEventListener('click', function(){
    window.sessionStorage.userSkill = skill.value;
    skill.value = '';
  });
  btnShow.addEventListener('click', function(){
    text.innerText = window.sessionStorage.getItem('userSkill');
  });

  // Task 2
  let body = document.querySelector('body');
  let bgColor = document.querySelector('#color');
  bgColor.addEventListener('change', function(){
    body.style.backgroundColor = this.value;
    window.localStorage.background = this.value;
  });
  body.style.backgroundColor = window.localStorage.getItem('background');

  // Task 3
  let list = document.querySelector('.toDoList');
  let btn = document.querySelector('.addTask');
  let newList = document.querySelector('.list');
  let toDoList = document.querySelector('#task');
  let arr = [];
  let parseList = JSON.parse(window.localStorage.getItem('task'));
  if (parseList !== null){
  parseList.forEach(function(item){
    let newLi = document.createElement('li');
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    newList.appendChild(newLi);
    newLi.innerHTML = item;
    newLi.appendChild(removeBtn);
    removeBtn.addEventListener('click', function(){
      newLi.remove();
      arr.pop();
    });
  });
};

  btn.addEventListener('click', function(e){
    e.preventDefault();
    if(toDoList.value === ''){
      alert('Enter smth');
    }
    else{
      let newLi = document.createElement('li');
      let removeBtn = document.createElement('button');
      newList.appendChild(newLi);
      newLi.innerHTML = toDoList.value;
      removeBtn.innerHTML = 'Remove';
      newLi.appendChild(removeBtn);
      arr.push(toDoList.value);
      removeBtn.addEventListener('click', function(){
        newLi.remove();
      });
      list.reset();
      window.localStorage.setItem('task', JSON.stringify(arr));
    };
  });

  // Task 4
  let user = {
    name: "Mariia",
    age: 30,
    mariied: false,
    skills: ["html", "css", "JS"]
  };
  window.localStorage.userData = JSON.stringify(user);
  let parseData = JSON.parse(window.localStorage.getItem("userData"));
  console.log(parseData);
}