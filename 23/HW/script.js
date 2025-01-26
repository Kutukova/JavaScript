// Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).
// Виведіть імена та електронні адреси користувачів у консоль або на веб-сторінку.
// Виведення детальної інформації про одного користувача.
// Зробіть запит до /users/1 (або будь-якого іншого ID), щоб отримати деталі про конкретного користувача.
// Виведіть отриману інформацію в форматованому вигляді, включаючи ім'я, нікнейм та електронну адресу.
// Отримання та відображення постів конкретного користувача
// Використовуйте /posts?userId=1 для отримання постів певного користувача.
// Виберіть та виведіть заголовки цих постів.
// Зробити сторінку з кнопкою, при натиску на кнопку робиться запит до 
// http swapi.dev/api/planets/1/ та виводиться картка з даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href

window.onload = function(){
  // Task 1
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=>{
    data.forEach(element => {
      console.log(`User's names: ${element.name}; user's email: ${element.email}`)
    });
  });

  // Task 2
  let user1 = document.querySelector('#user1');
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response=>response.json())
  .then(json=>user1.innerHTML=`Info about 1 user: <br><h2>Name:</h2>${json.name} <br><h2>Username:</h2>${json.username} <br><h2>Email:</h2> ${json.email}`);

  // Task 3
  let usersPosts = document.querySelector('#usersPosts');
  fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response=>response.json())
  .then(data=>{
    data.forEach(element => {
      let divEl = document.createElement('div');
      divEl.innerHTML = element.title;
      usersPosts.appendChild(divEl);
    });
});

// Task 4
let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
  fetch('https://swapi.dev/api/planets/1/')
  .then(response=>response.json())
  .then(data=>{
    data.forEach(element => {
      let divEl = document.createElement('div');
      divEl.innerHTML = `
      <br>Name: ${element.name}
      <br>Rotation-period: ${element.rotation_period}
      <br>Orbital-period: ${element.orbital_period}
      <br>Diameter: ${element.diameter}
      <br>Climate: ${element.climate}
      <br>Gravity: ${element.gravity}
      <br>Terrain: ${element.terrain}
      <br>Surface-water: ${element.surface_water}
      <br>Population: ${element.population}
      <br>Residents: ${element.residents}
      `
      btn.appendChild(divEl);
      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', element.films);
      linkEl.innerHTML = `<br>${element.films}`;
      divEl.appendChild(linkEl);
    });
  });
});
}