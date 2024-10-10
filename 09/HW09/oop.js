// 1. Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class Person{
  constructor (name, age){
    this._name = name;
    this._age = age;
  }
  sayHello(){
    console.log(`Hello user ${this._name} is ${this._age}`);
  }
}
let user = new Person('John', 30);
console.log(user);


// 2. Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

user.sayHello();

// 3. Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person{
  constructor(name, age, studentId){
    super(name, age);
    this._studentId = studentId;
  }
  study(){
    console.log(`Student ${this._name} is ${this._age} and studies ${this._studentId}`);
  }
}
let student = new Student ('Jack', 25, 'JS');
console.log(student);
student.study();