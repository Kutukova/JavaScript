window.onload = function(){
  function showAlert(){
      alert('Hello world');
  }
  let timoOutAlert = setTimeout(showAlert, 5000);
  let btnEl = document.querySelector('button')
  btnEl.onclick = function(){
      clearTimeout(timoOutAlert);
  }
  setTimeout(function(){
      console.log('hello setTimout');
  }, 8000);
  let counter = 0;
  function count(){
      counter++;
      document.querySelector('p').innerHTML = counter;
      if(counter>50){
          clearInterval(intervalCounter);
          alert('Stop count');
      }
  }
  let intervalCounter = setInterval(count, 1000);
}