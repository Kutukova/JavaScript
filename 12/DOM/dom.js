console.log(window);
console.log(document);

window.onload = function(){
    // let idEl = document.getElementById('test');
    // idEl.innerHTML = 'Hello JS';
    // console.log(idEl);
    // let classEl = document.getElementsByClassName('tex-item');
    // console.log(classEl);
    // let tagElements = document.getElementsByTagName('p');
    // console.log(tagElements);
    // #test>span
    // ul li:nth-child(3)
    let queryId = document.querySelector('#test');
    console.log(queryId);
    let link = document.querySelector('nav a');
    console.log(link);
    let linksEl = document.querySelectorAll('nav a');
    console.log(linksEl);
    let arrElement = Array.from(linksEl);
    console.log(arrElement);
    let[ ...pElements] = document.querySelectorAll('p');
    console.log(pElements);
}