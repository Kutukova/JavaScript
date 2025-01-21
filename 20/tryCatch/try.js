let user= {
  userName:'Tom',
  userAge:22
}

try{
  // let myValue = 'Hello try';
  // console.log(myValue);
  if(!user.userAge){
      throw new SyntaxError('No information about user age');
  }
}
catch(error){
  console.log(error);
  console.log(`Hello ${error.message}`);
  console.log(`Hello ${error.name}`);
  console.log(`Hello ${error.stack}`);
}
finally{
  console.log('Finally work evry time');
}