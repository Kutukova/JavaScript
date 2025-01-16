window.onload = function(){
  let mouseEl = document.querySelector('.mouse');
  mouseEl.addEventListener('mousedown', function(e){
      this.innerText = e.type;
  });
  mouseEl.addEventListener('mouseup', function(e){
      this.innerText = e.type;
  });
  mouseEl.addEventListener('mouseover', function(e){
      this.innerText = e.type;
      this.style.background = 'yellow';
  });
  mouseEl.addEventListener('mouseout', function(e){
      this.innerText = e.type;
      this.style.background = 'green';

  });
  // mouseEl.addEventListener('click', function(e){
  //     this.innerText = e.type;
  //     this.style.background = 'orange';
  // });
  mouseEl.addEventListener('dblclick', function(e){
      this.innerText = e.type;
      this.style.background = 'gray';
  });
  mouseEl.addEventListener('contextmenu', function(e){
      e.preventDefault();
      this.innerText = e.type;
      this.style.background = 'pink';
  });
  let moveEl = document.querySelector('.move');
  let infoEl = document.querySelector('.info');
  moveEl.addEventListener('mousemove', function(e){
      // console.log(e);
      infoEl.innerText = `Type: ${e.type} Client x and y ${e.clientX} and ${e.clientY} Layer x and y ${e.layerX} ${e.layerY} Offset ${e.offsetX} and ${e.offsetY}`;
  });
  let inputEl = document.querySelector('input');
  let keyInfo = document.querySelector('.keyinfo');
  // keydown
  // keyup
  // keypress застарілий метод
  inputEl.addEventListener('keydown', function(e){
    keyInfo.innerText = e.type;
  //    console.log(e);
  });
  inputEl.addEventListener('keyup', function(e){
      e.preventDefault();
      keyInfo.innerText = e.type;    
      console.log(`key = ${e.key} key Code = ${e.code}`);   
      if(e.shiftKey){console.log('Shift true');}
      if(e.altKey){console.log('Alt true');} 
      if(e.ctrlKey){console.log('Ctrl true');} 
  });
}