let myObj = new Object();
let simpleObj = {};
console.log(myObj);
console.log(simpleObj);

let laptopObj = {
    model:'apple',
    ram:'16gb',
    memory: 512,
    info: function(){
        console.log(`${this.model} has ${this.memory} GB`);
    }
}

laptopObj.processor = 'm2';

console.log(laptopObj);

laptopObj.info();

console.log(`Object info ${laptopObj.model} second variant ${laptopObj['memory']}` );

delete laptopObj.processor;
delete laptopObj.memory;
delete laptopObj.model;

console.log(laptopObj);

let objInfo = {
    age: 45,
    emailUser: 'test@gmail.com',
    friends:['Tom', 'Bob'],
    isStudy: true,
    skills:[
        {skillName: 'Html', rating: 4},
        {skillName: 'Css', rating: 4.5}
    ]
}