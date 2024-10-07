// for of
// let myArr = ['Tom', 1, 12, true, 'string'];
let myArr = [
  {userName:'Tom', age:30},
  {userName:'Bob', age:35}

];


for (const value of myArr) {
  // console.log(`For of infor from arr ${value}`);
  console.log(`User info ${value.userName} has age ${value.age}`);
}

// for in

let obj = {
  a: 1,
  b:2,
  c: 3
}

for (const key in obj) {
  console.log(`For in work ${key} info ${obj[key]}`);
  // if (Object.hasOwnProperty.call(object, key)) {
  //     const element = object[key];
      
  // }
  if(obj.hasOwnProperty(key)){
      console.log(`For in work ${key} info ${obj[key]}`);
  }
}