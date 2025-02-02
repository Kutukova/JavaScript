// 1. Створіть канвас і за допомогою JavaScript малюйте на ньому 3 прямокутники  які пересікаються. Використовуйте метод fillRect для цього.
// https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#fillrect-x-y-w-h 

// 2. Залиття канвасу градієнтом
// Створіть функцію, яка отримує 2 кольори та заливає весь канвас лінійним або  градієнтом. Використовуйте createLinearGradient  для створення градієнту:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient 

// 3. Малювання простої лінії
// Створіть функцію, яка малює пряму лінію з однієї точки канвасу до іншої. Використовуйте методи moveTo для встановлення початкової точки лінії та lineTo для визначення кінцевої точки. Не забудьте викликати stroke(), щоб 
// намалювати лінію.
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo 

// Практика роботи з svg https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial 
// 4. Динамічне створення SVG-лінії
// Створіть функцію на JavaScript, яка додає на сторінку SVG-елемент з лінією, параметри якої (початкова та кінцева точки, колір, товщина) передаються як аргументи функції.

// 5. Створення SVG прямокутника з JavaScript
// Створіть функцію, що динамічно додає на сторінку SVG прямокутник з заданими користувачем параметрами (ширина, висота, колір заливки, колір обведення та товщина лінії обведення).


// Get the canvas and context globally
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Fill initial rectangles
ctx.fillStyle = 'pink';
ctx.fillRect(50, 50, 150, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(100, 80, 150, 100);
ctx.fillStyle = 'orange';
ctx.fillRect(150, 110, 150, 100);

// Function to fill gradient
function fillGradient(color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to draw a line on canvas
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 3; 
  ctx.stroke();
}

// Function to add an SVG line
function svgLine(x1, y1, x2, y2, color, width) {
  const svgLink = "http://www.w3.org/2000/svg";
  const svgEl = document.createElementNS(svgLink, 'svg');
  svgEl.setAttribute('width', '500');
  svgEl.setAttribute('height', '500');

  const line = document.createElementNS(svgLink, 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', width);
  
  svgEl.appendChild(line);
  document.body.appendChild(svgEl); 
}

// Function to add an SVG rectangle
function svgRectangle(width, height, fillColor, strokeColor, strokeWidth) {
  const svgLink = "http://www.w3.org/2000/svg";
  const svgEl = document.createElementNS(svgLink, 'svg');
  svgEl.setAttribute('width', '500');
  svgEl.setAttribute('height', '500');

  const rect = document.createElementNS(svgLink, 'rect'); 
  rect.setAttribute('x', 50);
  rect.setAttribute('y', 50);
  rect.setAttribute('width', width);
  rect.setAttribute('height', height);
  rect.setAttribute('fill', fillColor);
  rect.setAttribute('stroke', strokeColor);
  rect.setAttribute('stroke-width', strokeWidth);
  svgEl.appendChild(rect);
  document.body.appendChild(svgEl); 
}