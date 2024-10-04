console.log([1,2]);
let todoList = ['Dog'];
// todoList[0] = 'Buy Milk';
// push додає значення в кінець
todoList.push('Buy milk');
todoList.push('Buy cat');
// pop видаляє останнє значення
todoList.pop();
todoList.pop();
// unshift додає значення на початок
todoList.unshift(1);
todoList.unshift(true);

// shift видаляє значення на початку масива
todoList.shift();
console.log(todoList);

// isArray 

console.log(Array.isArray('String'));
console.log(Array.isArray(123));
console.log(Array.isArray([1,2,3]));

// fill
let fillArr = new Array(10);
fillArr.fill(1); // [1,1,1,1,1,1,1]
fillArr.fill('*', 5);
fillArr.fill('!', 6, 8);
console.log(fillArr);

// Sort
console.log('== sort ==');
let sortArr =[17, 7, 12, 10, 1,2,3];
sortArr.sort();
sortArr.sort((a, b)=>a-b);
sortArr.sort((a, b)=>a+b);
console.log(sortArr);

// Splice 
console.log('== splice ==');
let spliceArr = [1,2,3,4,5,6,7];
// let afterSplice = spliceArr.splice(2);
// let afterSplice = spliceArr.splice(2, 5);
let afterSplice = spliceArr.splice(-1);

console.log(afterSplice);
console.log(spliceArr);

// Reverse 
console.log('== reverse ==');
let reverseArr = [1,2,3];
reverseArr.reverse();
console.log(reverseArr);

// Concat
console.log('== Concat ==');

let firstArr = [1,2,3];
let secondArr = [4,5,6];
firstArr = firstArr.concat(secondArr, 7,8,9, [10, 11]);
console.log(firstArr);

// Includes
console.log('== Includes ==');

let includesArr = [1,2,3,'Test'];
console.log(includesArr.includes(20));
console.log(includesArr.includes(2));
console.log(includesArr.includes('test'));// === 

// IndexOf
console.log('== IndexOf ==');
let indexOfArr = [1,2,4,'Test'];
console.log(indexOfArr.indexOf(20));
console.log(indexOfArr.indexOf(1));
indexOfArr[1] = 3;
console.log(indexOfArr.indexOf('Test'));

// Join
console.log('== Join ==');
let joinArr = ['HEllo', 'World'];
// let afterJoin = joinArr.join('');
let afterJoin = joinArr.join(',');
// split  конвертує стрінг до массива
afterJoin = afterJoin.split(',');
console.log(afterJoin);

// Slice
console.log('== Slice ==');
let sliceArr = ['Test', 12,2,3,4,5];

// let afterSlice = sliceArr.slice(3);
// let afterSlice = sliceArr.slice(1,4);
// let afterSlice = sliceArr.slice();
let afterSlice = sliceArr.slice(-3);

console.log(afterSlice);
console.log(sliceArr);

//Filter
console.log('== Filter ==');

let filterValue = [10, 20, 30, 25, 15];
function checkValue(value){
    return value>20;
}
let filterResult = filterValue.filter(checkValue);
console.log(filterResult);
console.log(filterValue);

let fruits = ['Orange', 'Banan', 'Orange'];

let oranges = fruits.filter((item)=>item === 'Orange'? true:false);
console.log(oranges);

// ForEach
console.log('== ForEach ==');
let forEachArr = [1,2,3];

forEachArr.forEach((value, index, arr)=>{
    console.log(`ForEach ${value} index : ${index} from ${arr}`);
});

console.log(forEachArr);

// Map
console.log('== Map ==');

let mapArr = ['a', 'b', 'c'];

let newMapArr = mapArr.map((value, index, arr)=>`Map value ${value} index ${index} from ${arr}`);
console.log( newMapArr);
console.log(mapArr);

// Old way
console.log('== Loop ==');
let myArr = ['111', 2, 33];
let newArrOld = [];
for(let i =0; i<myArr.length; i++){
    console.log(myArr[i]);
    newArrOld.push(myArr[i]+1);
}
console.log(newArrOld);