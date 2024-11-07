window.onload = function(){
  let blockEl = document.querySelector('.block');

  let width = blockEl.offsetWidth;
  let height = blockEl.offsetHeight;
  console.log(`Block w and h ${width} and ${height}`);
  
  let widthC = blockEl.clientWidth;
  let heightC = blockEl.clientHeight;

  console.log(`Client w and h ${widthC} and ${heightC}`);

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  console.log(`Window size ${windowWidth} and ${windowHeight}`);

  let bodyEl = document.querySelector('body');
  console.log(`Body info size ${bodyEl.clientHeight} and ${bodyEl.clientWidth}`);
}