function startGame(){
  let options = ["камінь", "ножниці", "папір"];
  let computerChoise = options[Math.floor(Math.random()*3)];

  let userChoise = prompt('Виберіть одне з значень:камінь, ножниці, папір').trim().toLowerCase();

  if(!options.includes(userChoise)){
      alert('Виберіть один з запропонованих варіантів');
      return;
  }

  if(computerChoise === userChoise){
      alert('Hічия!');
  }
  else if(
      (userChoise === 'камінь' && computerChoise === 'ножниці') ||         (userChoise === 'ножниці' && computerChoise === 'папір') ||       (userChoise === 'папір' && computerChoise === 'камінь')
  ){
      alert(`Перемога! my ${userChoise} vs ${computerChoise}`);
  }
  else{
      alert('Програш, спробуйте ще!');
  }
}
startGame();