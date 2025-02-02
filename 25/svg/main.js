window.onload = function(){
  let btnEl = document.querySelector('button');
  let svgContainer = document.querySelector('.svgContainer');
  const svgNS = 'http://www.w3.org/2000/svg';
  
  function drawSvgRect(width, height){
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', width);
      svg.setAttribute('height', height);
      svg.style.display = 'block';

      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('width', width);
      rect.setAttribute('height', height);
      rect.setAttribute('fill', 'green');

      svg.appendChild(rect);
      svgContainer.appendChild(svg);

  }

  function drawSvgCircle(radius, fillColor, stroke, strokeWidth){
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', radius*2+strokeWidth*2);
      svg.setAttribute('height', radius*2+strokeWidth*2);

      const circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('cx', radius+strokeWidth);
      circle.setAttribute('cy', radius+strokeWidth);
      circle.setAttribute('r', radius);
      circle.setAttribute('stroke', stroke);
      circle.setAttribute('stroke-width', strokeWidth);
      circle.setAttribute('fill', fillColor);

      svg.appendChild(circle);
      svgContainer.appendChild(svg);
  }


  btnEl.onclick = function(){
      // drawSvgRect(400, 200);
      drawSvgCircle(100, 'red', 'black', 30);
  };
}