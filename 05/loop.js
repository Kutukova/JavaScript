// console.log('Hello 1');
// console.log('Hello 2');
// console.log('Hello 3');

let counter = 1;
do{
  // console.log(`Hello ${counter}`);
  document.write(`<h3>Hello ${counter}</h3>`);
  counter++;
}while(counter<21);

console.log('Loop end');

let whileCounter = 0;
while(whileCounter<5){
  console.log(`Counter value ${whileCounter}`);
  whileCounter++;
};

for(let i=0; i<10; i++){
  // if(i === 5){
  //   break;
  // }
  if(i%2 === 0){
    continue;
  }
  console.log(`For loop value ${i}`);

}