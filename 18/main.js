window.onload = function(){
  let formEl = document.querySelector('form');
  let outputRes = document.querySelector('span');
  outputRes.innerText = 'any select size';
  let [...radioButtons] = document.querySelectorAll('input[name="size"]');
  formEl.addEventListener('change', ()=>{
      let selectSize = '';
      for(radioubutton of radioButtons){
          // checked
          if(radioubutton.checked){
              selectSize = radioubutton.value;
              break;
          }
      }
      outputRes.innerText = selectSize ? `Your select ${selectSize}` : `Any select`;
  });

  let checkboxEl = document.querySelector('#accept');
  checkboxEl.addEventListener('change', function(){
      if(this.checked){
          alert('Rules accepted');
      }else{
          alert('Accept False');
      }
  });

  let resultBtn = document.querySelector('.showResult');
  let resutltBox = document.querySelector('.resultBox');
  let [...checkboxes] = document.querySelectorAll('input[name="Transport"]');
  // let [...checkboxes] = document.querySelectorAll('input[name="Transport"]:checked');
  let checkedValues = [];
  resultBtn.onclick = function(){
      resutltBox.innerHTML ="";
      checkedValues = [];
      checkboxes.forEach(item=>{
          if(item.checked){
              checkedValues.push(item.value);
          }
      });
      checkedValues.forEach(item=>{
          let pEl = document.createElement('p');
          pEl.innerText = item;
          resutltBox.appendChild(pEl);
      });
  }

  let selectEl = document.querySelector('#skills');
  let skillRes = document.querySelector('.skillResult');
  selectEl.addEventListener('change', function(){
      skillRes.innerText = this.value
  })
}