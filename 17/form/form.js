window.onload = function(){
  let formEl = document.querySelector('form');
  let clearBtn = document.querySelector('.clear');
  let sendBtn = document.querySelector('.sendBtn');
  clearBtn.addEventListener('click', function(e){
      e.preventDefault();
      formEl.reset();
  });
  sendBtn.addEventListener('click', function(e){
      e.preventDefault();
      formEl.submit();
  });
  console.log([...formEl]);
  let inputEl = document.querySelector('.text-input');
  let inputBtn = document.querySelector('.getData');

  inputBtn.onclick = function(e){
      e.preventDefault();
      console.log(inputEl.value);
  }
  inputEl.onchange = function(){
      console.log(this.value);
  }
}