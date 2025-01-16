window.onload = function(){
  let isTunel = false;
  let firstEl = document.querySelector('#first');
  let secondEl = document.querySelector('#second');
  let thirdEl = document.querySelector('#third');

  firstEl.addEventListener('click', function(){
      this.style.background = 'green';
      alert('1 block');
  }, isTunel);
  secondEl.addEventListener('click', function(e){
      this.style.background = 'orange';
      alert('2 block');
      e.stopPropagation();
  }, isTunel);
  thirdEl.addEventListener('click', function(e){
      this.style.background = 'yellow';
      alert('3 block');
  }, isTunel);
}