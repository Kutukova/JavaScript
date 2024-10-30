window.onload = function(){
  let ulEl = document.querySelector('ul');
  console.log(ulEl.children);
  // first child El
  console.log(ulEl.firstElementChild);
  let firtsEl = ulEl.firstElementChild;
  firtsEl.innerHTML ='First';
  firtsEl.style.background = 'red';
  let lastEl = ulEl.lastElementChild;
  lastEl.innerHTML = 'Last';

  let activeEl = document.querySelector('.active');
  console.log(activeEl);
  console.log(activeEl.nextElementSibling);
  console.log(activeEl.previousElementSibling);
  let nextEl = activeEl.nextElementSibling;
  let prevEl = activeEl.previousElementSibling;
  // nextEl.innerHTML = 'next';
  prevEl.innerHTML = 'prev';
}