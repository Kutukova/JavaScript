let nowDate = new Date();
console.log(nowDate);   

// new Date(year, month, hours,minutes, seconds, ms);

let firstMonth = new Date(2000, 0);
console.log(firstMonth);

console.log(nowDate.getDate()); // return day
console.log(nowDate.getDay()); // return day number
console.log(nowDate.getFullYear()); // return year
console.log(nowDate.getMonth()); // return month number
console.log(nowDate.getHours()); // return hour
console.log(nowDate.getMinutes()); // return minutes
console.log(nowDate.toJSON());// convert JSON format
console.log(nowDate.toDateString()); // data string
console.log(nowDate.toUTCString()); // data string UTCS