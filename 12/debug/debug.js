let firstValue = 2; 
let secondValue = 2;
let result = firstValue+secondValue
console.log(result);

let dataArr = ['First', 'Second', 'Third'];
function innerFn(value){
    return value+33;
}

dataArr.forEach(item=>{
    let res = innerFn(item);
    console.log(`res: ${res}`);
})