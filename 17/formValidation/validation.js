window.onload = function(){
  document.querySelector('#loginForm').addEventListener('submit', function(e){
      e.preventDefault();
      let usernameEl = document.querySelector('#username');
      let passwordEl = document.querySelector('#password');

      let isValid = true;
      usernameEl.classList.remove('is-invalid');
      passwordEl.classList.remove('is-invalid');
      if(usernameEl.value === ''){
          usernameEl.classList.add('is-invalid');
          isValid = false;
      }
      if(passwordEl.value === ''|| passwordEl.value.length <=3 ){
          passwordEl.classList.add('is-invalid');
          isValid = false;
      }

      if(isValid){
          alert('Дані успішно відправлені');
          usernameEl.value = '';
          passwordEl.value = '';
      }else{
          alert('Форма заповненна некоректно');
      }
  });
}