let firstUser = 'Tom';
let secondUser = 'Bob';
let myFirstArray = [firstUser, secondUser, 'Info about users', true, 100];
let mySecondArray = new Array();
mySecondArray[0]='First value';
myFirstArray[1] = secondUser;
mySecondArray[2] = '0121231234';

myFirstArray[0] = 'New user';


console.log(myFirstArray);
console.log(mySecondArray);

let emptyArr = new Array(10);
console.log(emptyArr);
let users = [firstUser, secondUser, 'Ros', 'Nick', 'Diana'];
console.log(users.lenth);
for(let i=0; i<users.length; i++){
// console.log(`Hello user: ${users[i]}`);
if(users[i]=='Nick'){
  users[i]='Ros';
}
}
console.log(users);

let moreUsersdata = [
  ['Tom', 'email@test.com', 23], 
  ['Nick', 'test@test.com', 25]
];
console.log(moreUsersdata[0][1]);

for(let i=0; i<moreUsersdata.length; i++){
  // console.log(moreUsersdata[i][0]);
  // console.log(moreUsersdata[i][1]);
  // console.log(moreUsersdata[i][2]);
  for(let c=0; c<moreUsersdata[1].length; c++){
    console.log(`User info ${moreUsersdata[i][c]}`);
  }
  console.log('=====');
}