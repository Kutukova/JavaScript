let strValue = "String";
console.log(strValue);
console.log(`String lenght ${strValue.length}`);
let replaceStr = strValue.replace('S','R');
console.log(`Replace value ${replaceStr}`);

console.log(`Slice value ${strValue.slice(1,3)}`);

let names = 'Nik,Tom,Bob,Rob';

let nameArr = names.split(',');
console.log(nameArr);

let userNameValue = "  UserName  ";
console.log(userNameValue);
console.log(userNameValue.trim());

// кАмінь === Камінь КАМІНЬ камінь

let textValue = 'javascript';
let upperText = textValue.toUpperCase();
console.log(upperText);
console.log(upperText.toLowerCase());