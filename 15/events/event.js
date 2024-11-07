window.onload = function(){
  let btnEl = document.querySelector('.btn');
  let addEvetnEl = document.querySelector('.addEvent');
  let removeBtn = document.querySelector('.remove');

  btnEl.onclick =function(){
      alert('HEllo event');
  }

  function showAlert(){
      alert('HEllo addEventListner');
  }
  addEvetnEl.addEventListener('click', showAlert);

  removeBtn.addEventListener('click', function(){
      addEvetnEl.removeEventListener('click', showAlert);
  });

  let [...pElements] = document.querySelectorAll('p');
  pElements.forEach(item=>{
      item.onclick = function(){
          console.log(this);
          this.innerText = 'Changed';
      }
  });

  let linkEl = document.querySelector('a');
  linkEl.onclick = function(evnet){
      console.log(evnet);
      console.log(evnet.target);
      evnet.preventDefault();
  }

  let ulList = document.querySelector('ul');
  ulList.onclick = function(e){
      console.log(e.target);
      if(e.target.classList.contains('active')){
          e.target.innerText = 'Active element';
      }
  }
}

document.addEventListener('DOMContentLoaded', ()=>{

});
document.addEventListener('load', function(){

});

function createClass(){
  return class{
      sayHi(){
          console.log('Hi');
      }
  }
}
const Class = createClass();
console.log(typeof ClassName);