let thisYear = 2023; 

if(thisYear === 2023){
    // alert('This year 2023');
}
else{
    console.log('Hello from else constracrtion');
    // alert('Another year');
}

let userNumber = 6;

if(userNumber<4){
    console.log('less 4 user number');
}
else if(userNumber>5 && userNumber<10){
    console.log('>5 and < 10');
}
else if(userNumber>10 && userNumber<12){
    console.log('>10 and < 12');
}
else{
    console.log('another user numbers');
}

let userIsAdmin = false;
if(!userIsAdmin){
    console.log('Hello admin');
}

let result ='';
let userLogin = false;

// if(userLogin){
//     result='Hello user';
// }
// else{
//     result='Login to system';
// }
result = userLogin ?'Hello user short if':'Login else condition';
console.log(`Result value ${result}`);

let firstValue = 10;
let secondValue = 50;

let maxValue = 0;
maxValue = firstValue>secondValue?firstValue:secondValue;
console.log(`Max value select ${maxValue}`);