// 1. Створіть сторінку та підключіть до неї js

// 2. За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

// 3. const menuData = [
//     { name: 'Головна', url: '/' },
//     { name: 'Про нас', url: '/about' },
//     { name: 'Послуги', url: '/services' },
//     // Додайте ще пункти меню за потреби
// ];

// Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.

// 4. Додайте тегам А що створені в header  атрибут target з властивістю _blank

// 5. Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

// 6. Додайте всім стврореним 50 div елементам класс circle-elemt

// Додаткове завдання: спробуйте зробити  завдання 5 так щоб в кожного div елемента був унікальний бекграунд

window.onload = function(){
  // Task1-2
  let bodyEl = document.querySelector('body');
  let headerEl = document.createElement('header');
  bodyEl.appendChild(headerEl);
  headerEl.setAttribute('style', 'padding:50px');
  headerEl.style.backgroundColor = 'yellow';
  headerEl.style.textAlign = 'center';
  // Task 3-4
  const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' }
  ];
  for (let menu of menuData){
    let linkEl = document.createElement('a');
    headerEl.appendChild(linkEl);
    linkEl.innerHTML = menu.name;
    linkEl.setAttribute('href', menu.url);
    linkEl.setAttribute('target', '_blank');
  };
  // Task 5-6
  let containerEl = document.createElement('container');
  headerEl.after(containerEl);
  containerEl.style.display = 'flex';
  for (let i = 0; i < 50; i++) {
    let div = document.createElement('div');
    containerEl.appendChild(div);
    div.style.borderRadius = '50%';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.backgroundColor = 'black';
    div.setAttribute('class', 'circle-elemt');
  };
}