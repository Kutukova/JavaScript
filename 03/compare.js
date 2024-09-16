let firstValue = 23;

// == Виконуємо порівняння значень і приведення їх типів
console.log(`Compare result 2 and 3 ${2==3}`);
console.log(`Compare result 2 and 2 ${2==2}`);
console.log(`Compare result 2 and '2' ${2=='2'}`);
console.log(`Compare result '2' and '3' ${'2'=='3'}`);
console.log(`Compare result string and string ${'Max'=='Bob'}`);
console.log(`Compare result boolean and number ${true==1}`);

// === Виконуємо порівняння значень без приведення їх типів
console.log('===');
console.log(`Compare result 2 and 3 ${2===3}`);
console.log(`Compare result 2 and 2 ${2===2}`);
console.log(`Compare result 2 and '2' ${2==='2'}`);
console.log(`Compare result '2' and '3' ${'2'==='3'}`);
console.log(`Compare result string and string ${'Max'==='Bob'}`);
console.log(`Compare result boolean and number ${true===1}`);

// != не дорівнює вона виконує приведення типів при порівнянні
console.log('!=');
console.log(`Compare result 2 and 3 ${2!=3}`);
console.log(`Compare result 2 and 2 ${2!=2}`);
console.log(`Compare result 2 and '2' ${2!='2'}`);
console.log(`Compare result '2' and '3' ${'2'!='3'}`);
console.log(`Compare result string and string ${'Max'!='Bob'}`);
console.log(`Compare result boolean and number ${true!=1}`);

// !==
console.log('!==');
console.log(`Compare result 2 and 3 ${2!==3}`);
console.log(`Compare result 2 and 2 ${2!==2}`);
console.log(`Compare result 2 and '2' ${2!=='2'}`);
console.log(`Compare result '2' and '3' ${'2'!=='3'}`);
console.log(`Compare result string and string ${'Max'!=='Bob'}`);
console.log(`Compare result boolean and number ${true!==1}`);

console.log('>, <, >= ...');
// >
console.log(`2>3 ${2>3}`);
console.log(`string 2>3 ${'2'>3}`);
console.log(`20>3 ${20>3}`);

// <
console.log(`2<3 ${2<3}`);
console.log(`string 2<3 ${'2'<3}`);

console.log('>=');
console.log(`2> and = 2 ${2>=2}`);
console.log(`1> and = 2 ${1>=2}`);

console.log('<=');
console.log(`1< and = 2 ${1<=2}`);
console.log(`2< and = 2 ${2<=2}`);
console.log(`3< and = 2 ${3<=2}`);

// &&
// true && false = false
// false && true = false
// false && false = false
// true && true = true

let userAge = 20;
let checkUserAge = userAge>18;
let userNickname = 'admin';
let checkAdmin = 'admin' == userNickname;

let userPermition = checkAdmin && checkUserAge;

// ||
// true || false = true
// true || false = true
// true || true = true
// false || true = true
// false || false = false

let firstPromtValue = Number(prompt('Type first value'));
console.log(`User value is ${firstPromtValue}`);


