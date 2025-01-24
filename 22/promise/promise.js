let firstPromise = new Promise(function(resolve, reject){
  console.log('Promise work');
});
// pending 
// fulfilled
// rejected

let x = 2;
let y = 5;

let calcPromise = new Promise(function(resolve, reject){
  if(y === 0){
      reject(alert(`0 is bad value for operation`));
  }
  else{
      let result = x/y;
      resolve(alert(`Resolve ${result}`));
  }
});

let numberValue = 10;
let checkNumber = new Promise(function(resolve, reject){
  if(numberValue>2){
      resolve('Nice number');
  }
  else{
      reject('Bad value try another number');
      throw "Small number";
  }
});

checkNumber.then(function(value){
  console.log(value);
}).catch(function(error){
  console.log(`Promise catch error ${error}`);
});

let firstP = new Promise(function(resolve){
  resolve('First promise value');
});

let secondP = firstP.then(function(value){
  return `${value} and second Promise`;
});

let thirdP = secondP.then(function(value){
  return `${value} and third Promise`;
});

let finalP = thirdP.then(function(value){
  return `${value} and Final`;
})

finalP.then(function(finalValue){
  console.log(finalValue);
});

new Promise(resolve=>resolve('First value'))
.then(value=>`${value} second`)
.then(value=>`${value} third`)
.then(value=>console.log(value));

let myFinalPromise = new Promise((resolve, reject)=>{
  let valueCondition = true;
  if(valueCondition){
      resolve("Promise result!");
  }
  else{
      reject('Promise reject result');
  }
});

myFinalPromise.then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
}).finally(()=>{
  console.log('Final work result!!!!');
});