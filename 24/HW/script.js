// Завдання 1: Отримання даних користувача з JSONPlaceholder
// Створіть функцію, яка використовує async/await для отримання даних про конкретного користувача за id JSONPlaceholder. Виведіть ім'я та електронну адресу користувача.
// підказка: запит за іd чи іншими параметрами `https://jsonplaceholder.typicode.com/users/${userId}`

// Завдання 2: Виведення інформації про фільм з SWAPI
// Використайте async/await для запиту інформації про конкретний фільм з SWAPI. Виведіть назву фільму та дату виходу.

// Завдання 3: Отримання і виведення інформації про планету з SWAPI
// Створіть функцію, яка використовує async/await для запиту інформації про конкретну планету з SWAPI. Виведіть назву планети та клімат.

// Завдання 4: Розділення коду на модулі
// Створіть файл mathOperations.js, в якому будуть оголошені функції для основних математичних операцій (додавання, віднімання, множення, ділення). Експортуйте ці функції за допомогою named export.
// Створіть файл index.js, в якому ви імпортуєте та використовуєте ці функції для виконання математичних операцій.

// Завдання 5: Імпорт утиліти для роботи з текстом
// Створіть файл stringUtilities.js, де будуть функції для роботи з рядками, наприклад, функція для перетворення рядка в uppercase і функція для обернення рядка. Експортуйте ці функції. В index.js імпортуйте та використовуйте ці функції.


// Task 1
export async function fetchUserData(userId){
  try{
  let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if(!response.ok){
    throw new Error('Ошибка при запросе юзера');
  }
  let userData = await response.json();
  console.log(`Имя: ${userData.name}, email: ${userData.email}`);
}
catch(error){
  console.log(`Error ${error.message}`);
}
}

  // Task 2
  export async function fetchFilmData(filmId){
    try{
    let response = await fetch(`https://swapi.dev/api/films/${filmId}`);
    if(!response.ok){
      throw new Error('Ошибка при запросе фильма');
    }
    let film = await response.json();
    console.log(`Название: ${film.title}, Release date: ${film.release_date}`);
  }
  catch(error){
    console.log(`Error ${error.message}`);
  }
}

// Task 3
export async function fetchPlanetData(planetId){
  try{
  let response = await fetch(`https://swapi.dev/api/planets/${planetId}`);
  if(!response.ok){
    throw new Error('Ошибка при запросе');
  }
  let planet = await response.json();
  console.log(`Имя: ${planet.name}, климат: ${planet.climate}`);
}
catch(error){
  console.log(`Error ${error.message}`);
}
}

