// Тема: Spread
// Напишіть програму, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.
let firstArr = [3, 4, 5];
let secondArr = ['Bob', 'Tom', 'Jack'];
let spreadArr = [...firstArr, ...secondArr];
console.log(spreadArr);


// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.
console.log('===');
function stringArr(str, ...arr){
  console.log(str, arr);
}
stringArr('User', 1, 2, 3);

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.
console.log('===');
function average(...arguments){
  let value = 0;
  for(const arg of arguments){
    value += arg/arguments.length;
  }
  return value;
};
console.log(average(10,20,30,40,50));


// Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.
console.log('===');
function checkType(value){
  console.log(`Type ${typeof value}`)
};
checkType(111);
checkType({});
checkType('Bob');
checkType(true);

// Напишіть програму, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof. 
console.log('===');
const test = 'Test';
if (typeof test === 'number'){
  console.log('It is a number');
}
else if(typeof test === 'string'){
  console.log('It is a string');
}
else{
  console.log('It is another type');
}