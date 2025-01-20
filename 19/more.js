window.onload = function(){
  let styleText = 'scss';
  console.log(`Test string start c ${/^c/.test(styleText)}`);
  console.log(`Test ending SS: ${/ss$/.test(styleText)}`);

  let timeString = '17:30' // ^\d{1,2}:\d\d$

  console.log(`Test time ${/^\d{1,2}:\d{2}$/.test(timeString)}`);

  let jsString = 'Hello JS now i know JS! J.S.javascript js-ES j-s';
  let jsMath = jsString.match(/\bjs\b/gi);
  console.log(jsMath);

  let yearsInfo = 'One day in 21-12-1999 person start trip and finish in 10-10-2004';

  let timeRegEx = /\d{1,2}-\d{1,2}-\d{4}/g;

  let timeArr = yearsInfo.match(timeRegEx);
  console.log(timeArr);
}