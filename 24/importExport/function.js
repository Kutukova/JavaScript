export function hello(username){
  alert(`Hello ${username}`);
}

function summ(a,b){
  let res = a+b;
  console.log(`Result ${a} + ${b} = ${res}`);
}

function minus(a,b){
  let res = a-b;
  console.log(`Result ${a} - ${b} = ${res}`);
}

export {summ, minus}