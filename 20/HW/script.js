// Напишіть функцію, яка приймає повідомлення та час у мілісекундах як аргументи, і виводить це повідомлення у консоль після зазначеного часу.

// Створіть кнопку яка при натисканні запускає таймер, який виводить збільшення лічильника кожну секунду. Коли лічильник досягне 10, автоматично зупиніть таймер.

// Створіть HTML сторінку з кнопкою, яка змінює колір фону сторінки на випадковий колір який заданий в css зміних при кожному натисканні.

window.onload = function(){
  // Task 1
  let helloEl = 'Hello';
  function message (value){
    console.log(value);
  }
  setTimeout(message, 5000, helloEl);

  // Task 2
  let btn = document.querySelector('.counterBtn');
  let counter = 0;
  btn.addEventListener('click', function(){
    function count(){
      counter++;
      document.querySelector('p').innerHTML = counter;
      if(counter>10){
        clearInterval(intervalCounter);
      }
    }
    let intervalCounter = setInterval(count, 1000);
  });
  // Task 3
  let btnColor = document.querySelector('.color');
  function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
  }
  btnColor.addEventListener('click', function(){
    let root = document.documentElement;
    root.style.setProperty('--bg-color', randomColor())
  })

}