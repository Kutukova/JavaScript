// /* <ul id="tree">
// <li>Елемент 1
//     <ul>
//         <li>Під-елемент 1.1</li>
//         <li>Під-елемент 1.2
//             <ul>
//                 <li>Під-під-елемент 1.2.1</li>
//                 <li>Під-під-елемент 1.2.2</li>
//             </ul>
//         </li>
//         <li>Під-елемент 1.3</li>
//     </ul>
// </li>
// <li>Елемент 2
//     <ul>
//         <li>Під-елемент 2.1</li>
//         <li>Під-елемент 2.2</li>
//     </ul>
// </li>
// <li>Елемент 3</li>
// </ul>



// 1. Створіть сторінку в яку розмістіть список що розміщений вище, підключіть js файл до сторінки і виконайте такі завдання:
// - виберіть всі елементи першого рівня вкладення і виведіть в консоль їх кількість;
// - виведіть в консоль кількість елементів 2 рівня вкладення.
// <table>
// <thead>
//     <tr>
//         <th>
//             title
//         </th>
//         <th>
//             year
//         </th>   
//         <th>
//             rating
//         </th>                   
//     </tr>
// </thead>
// </table>



// 2. Пройдіть по масиву і зробіть заповнення таблиці даними з масива
// const booksArray = [
// {
// title: 'Пригоди Аліси в Країні Див',
// year: 1865,
// rating: 4.5
// },
// {
// title: '1984',
// year: 1949,
// rating: 4.8
// },
// {
// title: 'Гаррі Поттер і філософський камінь',
// year: 1997,
// rating: 4.7
// }
// ];



// 3.  Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
// const elementsArray = [
// { tag: 'p', text: 'Елемент 1' },
// { tag: 'div', text: 'Елемент 2' },
// { tag: 'span', text: 'Елемент 3' }
// ];

// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.

// Пройдіть циклом по масиву і для кожного об'єкту застосуйте створену функцію.



// 4. Створіть блок контейнер та перебераючи масив створіть елемент Р в залежності від usePrepend розмість його перед контейнером або за контейнером 
// const elementsArray = [
// { text: 'Елемент 1', usePrepend: true },
// { text: 'Елемент 2', usePrepend: false },
// { text: 'Елемент 3', usePrepend: true }
// ] *}


window.onload = function(){
  // Task 1
  let ulItems = document.querySelector('#tree');
  let firstList = ulItems.children;
  let QuantFirstList = ulItems.children.length;
  console.log(firstList);
  console.log(`Quantity of first list ${QuantFirstList}`);
  for (let item of firstList){
    console.log(item.children);
    console.log(`Quantity of second list ${item.childElementCount}`);
  }
// Task 2
const booksArray = [
  {title: 'Alice in Wonderland', year: 1865, rating: 4.5},
  {title: '1984', year: 1949, rating: 4.8},
  {title: 'Harry Potter', year: 1997, rating: 4.7}
  ];
const booksTable = document.getElementById('books-table');
booksArray.forEach(book => {
  const items = document.createElement('tr');
  items.innerHTML = `<td>${book.title}</td><td>${book.year}</td><td>${book.rating}</td>`;
  booksTable.appendChild(items);
});
// Task 3
const elementsArray = [
{ tag: 'p', text: 'Елемент 1' },
{ tag: 'div', text: 'Елемент 2' },
{ tag: 'span', text: 'Елемент 3' }
];
function createElement(obj){
  const element = document.createElement(obj.tag);
  element.textContent = obj.text;
  return element;
}
const container = document.getElementById('container');
elementsArray.forEach(elObj => {
  const newEl = createElement(elObj);
  container.appendChild(newEl);
});
// Task 4
const prependArray = [
  {text: 'Елемент 1', usePrepend: true},
  {text: 'Елемент 2', usePrepend: false},
  {text: 'Елемент 3', usePrepend: true}
];
prependArray.forEach(el => {
  const newElement = document.createElement('p');
  newElement.textElement = el.text;
if (el.usePrepend){
  container.prepend(newElement);
}
else {
  container.appendChild(newElement);
}
});
}