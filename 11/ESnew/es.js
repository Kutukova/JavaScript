let keyValue = Symbol('key');
console.log(keyValue);
let nextKey = Symbol('key');
console.log(`Test keyValue and nextKey ${keyValue === nextKey}`);
console.log(`Test keyValue and nextKey ${keyValue == nextKey}`);

// Spread
let firstArr = [1,2,3];
let secondArr = [...firstArr, 4,5,6];
console.log(secondArr);

let firstObj = {
    userName:'Tom',
    userAge:111
}

let secondObj = {
    ...firstObj,
    skill: 'js'
}

console.log(secondObj);

// Rest operator

function restFnTest(...arg){
    console.log(arg);
}
restFnTest(3,4,5,6);
// Math.min(1,11,23,33);
console.log(Math.min(...secondArr));
console.log(Math.max(...secondArr));

// Деструкция
const person = {
    firstName:'John',
    lastName:'Doe'
}
console.log(person.firstName);

const {firstName, lastName} = person;
console.log(`Get info ${firstName} and ${lastName}`);

let dataArr = ['Name Tom', 'Age 20', 'HTML', 'CSS', 'js'];
const [name, age, ...skills] = dataArr;
console.log(skills);
console.log(`User info ${name} and ${age}`);

const hero = {
    heroName: 'Batman',
    realName: 'Bruce',
    // suitColor: 'red'
}

const {heroName, realName, suitColor ='black'} = hero;
console.log(`Hero info ${heroName} real name ${realName}  color:${suitColor}`);

const heroes =[
    {name:'Batman'},
    {name:'Joker'}
];

for(const {name} of heroes){
    console.log(name);
}
// for(const item of heroes){
//     console.log(item.name);
// }
const textInfo = heroes.map(
    function({name}){
        return `This hero name is ${name}`;
    }
);
console.log(textInfo);