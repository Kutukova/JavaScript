// push:
// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

console.log('== push ==');

let arrPush = [];
arrPush.push('Kutukova', 'Kiev', 30);
console.log(arrPush);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let arrNewPush = ['Mariia', 30, 'Kiev'];
let pushArr = (arr, value)=>arr.push(value);
pushArr(arrNewPush, 'Kutukova');
console.log(arrNewPush);

// pop:
// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

console.log('== pop ==');

let arrPop = [11, 12, 13, 14, 15, 16];
arrPop.pop(-1);
console.log(arrPop);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let arrNewPop = [11, 12, 13];
let popArr = (arr, value)=>arr.pop(value);
popArr(arrNewPop, -1);
console.log(arrNewPop);

// unshift:
// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

console.log('== unshift ==');

let arrUnshift = [1, 2, 3, 4, 5, 6];
arrUnshift.unshift('Numbers');
console.log(arrUnshift);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let arrNewUnshift = [1, 2, 3, 4, 5, 6];
let unshiftArr = (arr, value)=>arr.unshift(value);
unshiftArr(arrNewUnshift, 'Value');
console.log(arrNewUnshift);

// shift:
// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

console.log('== shift ==');

let arrShift = [21, 30, 55, 90];
arrShift.shift();
console.log(arrShift);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let arrNewShift = [20, 30, 40];
let shiftArr = (arr)=>arr.shift();
shiftArr(arrNewShift);
console.log(arrNewShift);

// fill:
// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.

console.log('== fill ==');

let arrFill = new Array(15);
arrFill.fill('Hello');
console.log(arrFill);

// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

let arrNewFill = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fillArr = (arr, value, index)=>arr.fill(value, index);
fillArr(arrNewFill, '$', 2);
fillArr(arrNewFill, '&', 4);
console.log(arrNewFill);

// splice:
// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.

console.log('== splice ==');

let arrSplice = [1, 2, 3, 'Tom', 'string'];
arrSplice.splice(0, 1);
console.log(arrSplice);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.

let arrNewSplice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sliceArr = (arr, index, number)=>arr.splice(index, number);
sliceArr(arrNewSplice, 3, 5);
console.log(arrNewSplice);

// reverse:
// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

console.log('== reverse ==');

let arrReverse = [1, 2, 3, 4, 5, 6];
arrReverse.reverse();
console.log(arrReverse);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let arrNewReverse = [1, 2, 3, 4, 5, 6];
let reverseArr = (arr)=>arr.reverse();
reverseArr(arrNewReverse);
console.log(arrNewReverse);

// concat:
// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.

console.log('== concat ==');

let arrConcat = ['Tom', 'Bob'];
let arrSecConcact = ['Jack', 'John'];
arrConcat = arrConcat.concat(arrSecConcact)
console.log(arrConcat);

// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

let arrNewConcat = [1, 2, 3, 4, 5, 6];
let arrSecondConcat = ['z', 'y'];
let concatArr = (arr1, arr2)=>arr=arr1.concat(arr2);
concatArr(arrNewConcat, arrSecondConcat);
console.log(arr);

// includes:
// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.

console.log('== includes ==');

let arrIncludes = [1, 2, 3, 'Kutukova'];
console.log(arrIncludes.includes('Kutukova'));

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.

let arrNewIncludes = [1, 2, 3, 4, 5, 6, 'Tom'];
let includesArr = (arr, value)=>arr.includes(value);
includesArr(arrNewIncludes, 'Tom');
console.log(includesArr(arrNewIncludes, 'Tom'));

// filter:
// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.

console.log('== filter ==');

let arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function search(value){
  return value%2===0;
}
let result = arrFilter.filter(search);
console.log(result);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.

let arrNewFilter = [1, 2, 3, 4, 5, 6];
function search(value){
  return value%2===0;
}
let filterArr = (arr, func)=>filter=arr.filter(func);
filterArr(arrNewFilter, search);
console.log(filter); 

// map:
// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

console.log('== map ==');

let arrMap = [4, 6, 8];
let newArrMap = arrMap.map((value)=>value**2);
console.log(newArrMap);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення.

let arrMapNew = [1, 2, 3, 4, 5, 6];
function transform (value){
  return value = String(value);
}
let mapArr = (arr, value)=>newMap=arr.map(value);
mapArr(arrMapNew, transform);
console.log(newMap);