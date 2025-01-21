window.onload = function(){
  let changeBtn = document.querySelector('button');
  changeBtn.onclick = function(){
      let root = document.documentElement;
      let curentBg = getComputedStyle(root).getPropertyValue('--bg-color');
      if(curentBg === 'black'){
          root.style.setProperty('--bg-color','red');
          root.style.setProperty('--text-color','white');
          root.style.setProperty('--title-color','yellow');
      }
      else{
          root.style.setProperty('--bg-color','black');
          root.style.setProperty('--text-color','yellow');
          root.style.setProperty('--title-color','white');
      }
  }
}