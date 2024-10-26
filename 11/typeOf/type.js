let testNumber = 42;
console.log(`Test data type ${typeof testNumber}`);
let testString = 'Hello world';
console.log(`Test data type ${typeof testString}`);

let testBoolean = true;
console.log(`Test data type ${typeof testBoolean}`);

let testObj = {
    key:'test'
};
console.log(`Test data type ${typeof testObj}`);
let nullValue = null;
console.log(`Test data type ${typeof nullValue}`);

let arrValue = [1,2];
console.log(`Test data arr type  ${typeof arrValue}`);

let symbolValue = Symbol('key');
console.log(`Test data symbol type  ${typeof symbolValue}`);

let fnValue = ()=>'hello';
console.log(`Test data fn type  ${typeof fnValue}`);

let underfindValue = undefined;
console.log(`Test data undefined type  ${typeof underfindValue}`);