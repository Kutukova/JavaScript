window.onload = function(){
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle='black';
  ctx.fillRect(0,0, canvas.width, canvas.height);

  function drawTextCanvasCenter(text, fontSize = '22px', fontFace = 'Arial'){
      const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      ctx.font = `${fontSize} ${fontFace}`;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const centerX = canvas.width/2;
      const centerY = canvas.height/2;

      ctx.fillStyle = 'white';
      ctx.fillText(text, centerX, centerY);
  }
  drawTextCanvasCenter('Hello canvas');

  function drawDot(x, y){
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0 , Math.PI*2, true);
      ctx.fill();
  }
  canvas.addEventListener('click', function(e){
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX -rect.left;
      const y = e.clientY -rect.top;
      drawDot(x, y);
  });
}