window.onload = function(){
  let loader = document.querySelector('#loader');
  let dataContainer = document.querySelector('#data');
  let getBtn = document.querySelector('#loadData');
  getBtn.addEventListener('click', function(){
      loader.style.display = 'block';
      dataContainer.innerHTML = '';
      setTimeout(()=>{
          fetch('https://jsonplaceholder.typicode.com/pos')
          .then(response =>response.json())
          .then(data=>{
              loader.style.display = 'none';
              data.forEach(element => {
                  let divEl = document.createElement('div');
                  divEl.innerHTML = `
                      <h3>${element.title}</h3>
                      <p>${element.body}</p>
                  `;
                  dataContainer.appendChild(divEl);
              });
          })
          .catch(error=>{
              console.log(error);
              loader.style.display = 'none';
              dataContainer.innerHTML = 'Сталася помилка при завантаженні';
          })
      }, 5000);
  })
}