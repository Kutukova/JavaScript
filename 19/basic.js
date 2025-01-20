window.onload = function(){
  let simpleStr = /hi/;
  let simplePatern = /\d\d\d/g;

  let regClass = new RegExp('hi');
  let regClassPatern = new RegExp("\d\d\d");

  // search
  let textPatern = "Lorem ipsum dolor  sit amet consectetur adipisicing elit. Enim saepe sit praesentium 456 dolorum blanditiis earum id, voluptates odio, 789 iusto 145 tenetur amet beatae. Quam quod possimus laboriosam reiciendis voluptatem consequuntur vitae!"

  let firstSearchIndex = textPatern.search(simplePatern);
  console.log(`Index 3 number is ${firstSearchIndex}`);

  // replace

  let newResult = textPatern.replace(simplePatern, '!!!');
  let textBox = document.querySelector('p');
  textBox.textContent = newResult;

  // match
  let matchResult = textPatern.match(simplePatern);
  console.log(matchResult);

  //split 

  let splitText = '806123-23-24';
  let splitResult = splitText.split('-');
  console.log(splitResult);
  let textSplit = textPatern.split(simplePatern);
  console.log(textSplit);

  //test
  let pinCodePatern = /\d\d\d\d/;
  console.log(pinCodePatern.test('123'));
  console.log(pinCodePatern.test('1234'));
  console.log(pinCodePatern.test('12  34'));
  console.log(pinCodePatern.test('12ab'));

}