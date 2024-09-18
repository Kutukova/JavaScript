let numberValue = 1;
numberValue = numberValue +1;
console.log(numberValue);

numberValue+=1;
console.log(numberValue);
// +=, -=, *=, /= 

let postfixIncrement = 1;
console.log(`Start value ${postfixIncrement}`);
console.log(`Call with increment value ${postfixIncrement++}`);
console.log(`second call value ${postfixIncrement}`);
console.log(`Call with increment value ${postfixIncrement++}`);
console.log(`second call value ${postfixIncrement}`);

let postfixDecrement = 10;
console.log(`Start value ${postfixDecrement}`);
console.log(`Call with Decrement value ${postfixDecrement--}`);
console.log(`second call value ${postfixDecrement}`);
console.log(`Call with Decrement value ${postfixDecrement--}`);
console.log(`second call value ${postfixDecrement}`);

console.log('Prefix increment decrement');

let prefixIncremnt = 1; 
console.log(`Start value ${prefixIncremnt}`);
console.log(`Call with increment value ${++prefixIncremnt}`);
console.log(`second call value ${prefixIncremnt}`);
console.log(`Call with increment value ${++prefixIncremnt}`);
console.log(`second call value ${prefixIncremnt}`);

let prefixDecrement = 3;

console.log(`Start value ${prefixDecrement}`);
console.log(`Call with Decrement value ${--prefixDecrement}`);
console.log(`second call value ${prefixDecrement}`);
console.log(`Call with Decrement value ${--prefixDecrement}`);
console.log(`second call value ${prefixDecrement}`);