// Завдання 1.
// Перепишіть цей код використовуючи let const~
// Замість var for (var i = 0; i < 5; i++) {console.log(i);}
// // Замість var
// var message = 'test'; function example() {if (true) {var message = 'Hello, world!';console.log(message);} console.log(message); // Виведе 'Hello, world!'}

for (let i=0; i<5; i++){
  console.log(i);
}
const message = 'test';
function example(){
  if(true){
    let text = 'Hello world!';
    console.log(message);
  }
  console.log(message);
}
example();

// Завдання 2.
// Використовуючи for in  виведіть значення з об'єктку в console.log const person = { name: 'John', age: 25, occupation: 'Developer'};

const person = {
  name: 'John', 
  age: 25, 
  occupation: 'Developer'
};
for (const value in person){
  console.log(value, person[value]);
}

// Завдання 3.
// Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
// const students = [{ name: 'Alice', age: 20, grade: 'A' },{ name: 'Bob', age: 22, grade: 'B' },{ name: 'Charlie', age: 21, grade: 'C' }];

const students = [
  {name: 'Alice', age: 20, grade: 'A'},
  {name: 'Bob', age: 22, grade: 'B'},
  {name: 'Charlie', age: 21, grade: 'C'}
];
for (const value of students){
  console.log(`Info of user: ${value.name} is ${value.age} has grade ${value.grade}`);
};
for (value in students){
  console.log(value, students[value]);
}
