window.onload = function(){
  let containerEl = document.querySelector('.container');
  let titleEl = document.createElement('h3');
  titleEl.innerHTML = 'HEllo js element';
  containerEl.appendChild(titleEl);
  let linkArr = ['Home', 'Sale', 'About'];
  for(let link of linkArr){
      let linkEl = document.createElement('a');
      linkEl.innerHTML = link;
      // containerEl.appendChild(linkEl);
      // containerEl.prepend(linkEl);
      // containerEl.after(linkEl);
      containerEl.before(linkEl);
  }
  let listEl = document.querySelector('ul');
  let activeEl = document.querySelector('.active');
  let newLi = document.createElement('li');
  newLi.innerHTML = 'Replaced';
  listEl.replaceChild(newLi, activeEl);

  let lastLi = listEl.lastElementChild;
  listEl.removeChild(lastLi);
  let firstLi = listEl.firstElementChild;
  listEl.removeChild(firstLi);

  let mainTitle = document.querySelector('h1');
  mainTitle.remove();
}