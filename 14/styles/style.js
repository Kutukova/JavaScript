window.onload = function(){
  let linkEl = document.querySelector('a');
  linkEl.removeAttribute('target');
  let mainTitle = document.querySelector('h1');
  mainTitle.setAttribute('style', 'background-color:yellow;');
  // mainTitle.setAttribute('style', 'padding:30px');
  mainTitle.style.cssText += ' padding:30px';
  mainTitle.style.color ='white';
  mainTitle.style.backgroundColor ='black';
  mainTitle.style.fontSize = '30px';

  let allStyle = getComputedStyle(mainTitle);
  console.log(allStyle);
  console.log(`BG color ${allStyle.backgroundColor}`);
  console.log(`Font size  ${parseInt(allStyle.fontSize)}`);
  console.log(`Margin size  ${allStyle.marginTop}`);

  let subTitleEl = document.querySelector('h2');
  // subTitleEl.setAttribute('class', 'subTitle');
  // subTitleEl.setAttribute('class', 'active');
  // subTitleEl.className += ' active';
  // console.log(subTitleEl.classList);
  subTitleEl.classList.add('subTitle', 'active', 'test', 'test-again');
  // subTitleEl.classList.add('active');
  // subTitleEl.classList.remove('test');
  subTitleEl.classList.remove('test', 'test-again');
  // subTitleEl.classList.replace('subTitle', 'disabled');

  console.log(`Disabled is active ${subTitleEl.classList.contains('disabled-el')}`);

  subTitleEl.onclick = function(){
      subTitleEl.classList.toggle('active');
  }   
}