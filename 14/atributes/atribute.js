window.onload = function(){
  let linkEl = document.querySelector('.read');
  console.log(`Link target ${linkEl.getAttribute('target')}`);
  console.log(`Link href ${linkEl.getAttribute('href')}`);

  let emptyEl = document.querySelector('.empty');
  emptyEl.setAttribute('href', 'https://prog.kiev.ua/sale/');
  emptyEl.innerHTML = 'Sale';
  emptyEl.setAttribute('target', '_blank');

  let buttonEl = document.querySelector('button');
  console.log(`Button info disabled ${buttonEl.hasAttribute('disabled')}`);
  console.log(`Empty element has target ${emptyEl.hasAttribute('target')}`);

}